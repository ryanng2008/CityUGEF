import React, { ReactNode } from 'react'

function Question({ children, index }: {children: ReactNode; index: number}) {

  return (
    <div className=' mt-4 mb-16 px-16 py-6 bg-gray-200 rounded-2xl border border-gray-500'>
       <div className='w-5/6 mb-6'>
        <h1 className='text-2xl font-bold py-2 pb-4'>Question {index}</h1>
       <div className='py-2 my-2 flex flex-cols '>{children}</div>
       </div>
       </div>
  )
}

export default Question