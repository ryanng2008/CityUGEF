import { useState } from 'react'
import GalleryItem from './generic-comps/GalleryItem'
import { Menu } from '@headlessui/react'
import { categories } from '../backend/categories'

function Gallery() {

  function handleSwitchTab() {
    
  }

  const MenuButton = ({ text }: {text: string}) => {
    return (<div className='mx-4 my-1 py-1.5 px-1 text-center bg-[#8ECDDD] text-white border border-gray-500 rounded-xl font-bold text-xl' 
  onClick={handleSwitchTab}>
  {text}
  </div>)}

  
  const galleryItems = categories.map((category) => (
    <li><GalleryItem 
    title={category.title}
    tags={category.tags}
    description={category.description}
    image={category.imageLink}
    id={category.id}
    /></li>
  ))

  //const MenuButton = ({ text: string}) => { // use TSX
    
  //}

  return (
    <div className='w-full py-1 '>
      <div className='max-w-[1240px] flex flex-col text-black justify-center mx-auto'>
        <div className='menu-bar py-4 px-2 max-w-[350px] flex flex-row'>
          <div className='w-1/2'>
            <MenuButton text='Library' />
          </div>
          <div className='w-1/2'>
            <MenuButton text='Explore' />
          </div>
          </div>
        <div className='gallery-items'>
          <ul>
          {galleryItems}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gallery