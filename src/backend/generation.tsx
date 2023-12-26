import Question from '../components/generic-comps/Question'
//import { round, random } from './shortcuts'

//const numberStructure = [
//    ['{1}', 'window.random(5, 10,2)'],
//    ['{2}', 'window.round(Math.sin({1}),2)'],
//    ['{3}', 'window.random(3, 10)']
//]
//const questionTemplate = 'Simplify ({1} + √({2}))^{3}'

export function getQuestion(question: string, variablesArray: string[][]) {
    let vArrayCopy: string[][] = variablesArray.map(arr => [...arr])
/*------------FUNCTION SHORTCUTS--————————————*/
    //console.log('right before')
    const processedArray: string[][] = [];

    //console.log('the var array')
    //console.log(variablesArray)

    vArrayCopy.forEach((variable, index) => { // (element, index) - say variable is ['{2}', 'Math.sin({1})']
        //console.log(`variable 1 at this point: ${variable[1]}`)
        //console.log(`processedArray at this point: ${processedArray}`)
        const matches = (( variable[1] && variable[1].match(/{:(\d+):}/g))|| []) // finds the {}
        //console.log(`MATCHES LENGTH: ${matches.length}`)
        matches.forEach((match) => { // find the curly brackets(dependencies) in the FUNCTION and replace with their generated value
            console.log(`MATCH: ${match}`)
            let matchedIndex = -1;
            processedArray.forEach((innerArray, index) => {
                if(innerArray[0] === match) // if there is an existing generated value that represents the dependency
                    matchedIndex = index // get that generated value's index
            })
            const replacementValue = processedArray[matchedIndex][1] 
            console.log(`REPLACEMENT VALUE ${replacementValue}`)
            variable[1] = variable[1].replace(match, replacementValue) // replaces the dependency with the existing generated replacement value
        })
        //console.log(`VARIABLE [1] ${variable[1]} at index ${index} at Variable 0 ${variable[0]}`)
        const valueFunction = new Function(`return ${variable[1]}`)
        //console.log(`VALUE FUNCTION ${valueFunction}`)
        let value = valueFunction();
        //console.log(`VALUE ${value} at index ${index}`)
        processedArray.push([variable[0], value])
        if(question.includes(variable[0])) {
            if(variable[2] && variable[2] === 'm' && Math.abs(value) === 1)
                value = (value < 0) ? '-' : ''
            question = question.replaceAll(variable[0],value);
            console.log(question)
        }
    })
    console.log(`final question before returning ${question}`)

    return question
}

interface QuestionObject {
    index: number,
    question: string,
    vars: string[][]
}

export function getQuestionData(questionObject: QuestionObject) {
    const question = getQuestion(questionObject.question, questionObject.vars);
    console.log(`queston returning in getQuestionData ${question}`)
    return question
}


export function createQuestion(questionObject: QuestionObject) {
    const question = getQuestion(questionObject.question, questionObject.vars);
    //console.log(`QUESTION in createQuestion ${question}`)
    const questionComponent = <Question children={question} index={questionObject.index} key={questionObject.index} />
    
    //console.log(questionComponent)
    return questionComponent
}
//return processedArray
    // FORMATTING QUESTION

    //const matches = (question.match(/{(\d+)}/g) || [])
    //matches.forEach((match) => {
    //    let matchedIndex = -1;
    //        processedArray.forEach((innerArray, index) => {
    //            if(innerArray[0] === match)
    //                matchedIndex = index
    //        })
    //    question.replace(match,processedArray[matchedIndex][1]);
    //})


const rand = (min: number, max: number, places: number = 0) => { // MIN & MAX INCLUSIVE
    if (typeof places !== 'number' || places < 0 || min > max) {
        console.error('Invalid input.');
        return null;
      }
    const dp = Math.trunc(places)
    return min + (Math.round((Math.random()*(max-min)) * (10**dp)) / 10**dp)
}

const round = (value: number, places: number = 0) => {
    const dp = Math.trunc(places)
    return Math.round(value * (10**dp)) / (10**dp)
}

const rsign = (omitPositive: boolean = false) => { // RANDOM SIGN
    if(omitPositive)
        return Math.random() > 0.5 ? '-' : ''
    return Math.random() > 0.5 ? '+' : '-'
}

window.rand = rand;
window.round = round;
window.rsign = rsign;
      



// OLD FUNCTIONS
/*----------------------------------------------------------------------------------------------------*/

//function oldProcessQuestion(question: string, variablesArray: string[][]) {
//    const modifiedObject: { [key: string]: string } = {};
//    const variableValues: []
//    for (const [variable, expression] of Object.entries(variablesObject)) { // can you mutate objects?
//        modifiedObject[variable] = expression.replace(/{([^}]+)}/g, "values.$1") // replace variableValues
//    }
//    // for each variable and its function expression, run the function expression (where dependent variables identify dependencies through values.{variable})
//    for (const [variable, expression] of Object.entries(modifiedObject)) {
//        const currentFunction = Function('values', `return ${expression}`)
//        const value = currentFunction(variableValues); // BUG - as it is an object, cannot ensure that it is in the right order and therefore the reference to dependency will exist. FIX BY WRITING ALL VALUES INTO AN ARRAY (getting like variableValues[i][0])
//        variableValues[variable] = value;
//    }
//    const numbers = Object.values(variableValues);
//    return formatQuestion(question, numbers)
//    // Goal: Array in alphabetical order of correct numbers through functions
//}

//function formatQuestion(input: string, numbers: any[]) {  //[a, b, c]: number[]
//    numbers.forEach((num, i) => {
//        input = input.replace(`{${i + 1}}`, num.toString());
//      });
//    return input
//}

/*----------------------------------------------------------------------------------------------------*/


// alpha data structure
//const numStructure = [ // [variable, expression]
//    {variable: '1', expression: 'random([5, 10],2)'},
//    {variable: '2', expression: 'Math.sin({1})'},
//    {variable: '3', expression: 'random([3, 10])'},
//]

// beta data structure
//const numberStructure = [
//    ['1', 'random([5, 10],2)'],
//    ['2', 'Math.sin({1})'],
//    ['3', 'random([3, 10])']
//]

// NUMBER THE VARIABLES IN THE ORDER YOU WANT IT TO RENDER, IE IF 1 IS DEPENDENT ON 2, PUT 2 BEFORE 1



