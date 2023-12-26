import { Link } from 'react-router-dom'

interface GIProps {
  title: string;
  tags: {
    curriculum: string;
    grade: string;
    author: string;
    subject: string;
  };
  description: string;
  image: string;
  id: number;
}

function GalleryItem({ 
  title = 'My Category', 
  tags = {
    curriculum: 'No Curriculum', 
    grade: 'No Grade',
    author: 'No Author',
    subject: 'No Subject'}, 
  description = 'This is a set of practice questions', 
  image = '', 
  id = 0}: GIProps) { //{ props: any }

  function ItemTag({ text }: {text: string}) {
    return (
      <p className='text-sm px-4 mr-4 py-0.5 bg-gray-600 text-gray-50 rounded-xl'>{text}</p>
    )
  }

  return (
    <div>
      <Link to={`${id}`}>
        <div className='my-4 px-16 py-6 grid grid-cols-4 bg-[#A5C9CA] rounded-2xl' >
          <div className='col-span-3'>
            <div className='flex flex-col'>
              <p className='text-3xl font-bold mb-4'>{title}</p>
              <ul className='tags my-1 flex flex-row'>
                <li key={1}><ItemTag text={tags.curriculum.toLowerCase()} /></li>
                <li key={2}><ItemTag text={tags.grade.toLowerCase()} /></li>
                <li key={3}><ItemTag text={tags.author} /></li>
                <li key={4}><ItemTag text={tags.subject.toLowerCase()} /></li>
              </ul>
              <p className='my-4 text-sm'>{description}</p>
            </div>
          </div>
          <div className='col-span-1 max-h-[100%]'>
            <img 
            src={image} 
            alt="preview" 
            />
          </div>
        </div>
        </Link>
    </div>
  )
  // STOP PROPAGATING on the text but make the click on the full thing
}

export default GalleryItem