import { useParams } from 'react-router-dom'
import { categories } from '../../backend/categories'
import { createQuestion, getQuestionData } from '../../backend/generation'
import { globalList } from '../../backend/questionsDirectory'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex'
import Question from './Question'
import { useState } from 'react'

function QuestionsPage() {
  const categoryId = useParams().categoryId!;
  const category = categories.find((category) => category.id == parseInt(categoryId))
  const questions = globalList[categoryId]
  const [toggleSwitch, setToggleSwitch] = useState(false);
  console.log(`questions`)

  // BUG: WHENEVER STATE IS UPDATED THE QUESTIONS AUTO UPDATE

  //const questionsData = (questions && questions.map(question => getQuestionData(question))) || []
  //const regex = /\$(.*?)\$/g;
  const regex = /(?<!\\)\$(.*?)(?<!\\)\$/g;

  const questionItemsInitial = () => {return (questions && questions.map(question => {
    const rawQuestionText: string = getQuestionData(question); // [index, question]
    const matches = rawQuestionText.match(regex);
    if(!matches) {return <li><Question index={question.index} key={question.index}>{rawQuestionText}</Question></li>}
    const parts = rawQuestionText.split(regex);
    return(<li key={question.index}><Question index={question.index} key={question.index}>
      {parts.map((part, index) => {
        if (matches.includes(`$${part}$`)) {
          return <div className='pl-2'><InlineMath key={index}>{part}</InlineMath></div>;
        } else {
          return <p className='pl-2' key={index}>{part}</p>;
        }})}</Question></li>
    );})) || []}

  const [questionItems, setQuestionItems] = useState(questionItemsInitial);

  function refreshQuestionItems() {
    console.log('questions reset')
    setQuestionItems(questionItemsInitial);
  }

  //console.log(questionItems)
  //const questionItems = (questions && questions.map(question => <li>{createQuestion(question)}</li>)) || []
  return (
    <div className='w-full px-4'>
      <div className='max-w-[1120px] mx-auto py-8 flex flex-col'>
        <h1 className='mx-4 font-bold text-5xl py-4'>{category && category.title}</h1>
        <div className=' my-2 py-4 px-2 flex flex-row'>
          combobox
          <div onClick={refreshQuestionItems}>Refresh Question Items</div>
        </div>
        <div className='questions'>
          <ul>
            {questionItems}
          </ul>
        </div>
      </div>
    </div>
  )
}


export default QuestionsPage