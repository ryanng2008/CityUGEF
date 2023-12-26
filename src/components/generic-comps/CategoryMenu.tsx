import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { categories } from '../../backend/categories';

//{ categoryName, categoryId }: CategoryMenuProps
function CategoryMenu() {
  const categoryId = useParams().categoryId!;
  const category = categories.find((category) => category.id == parseInt(categoryId))

  // const menus = ['main', 'questions', 'test']
  // const [currentMenu, setCurrentMenu] = useState('main');


  //function goTo(menu: string) {
  //  setCurrentMenu(menu);
  //}

  
  interface MenuButtonProps {
    text: string;
    linkedPage: string;
  }



  // MAIN PAGE
  const MenuButton = ({ text = 'hi', linkedPage = 'main' }: MenuButtonProps) => {
    //onClick={() => goTo(linkedPage)}
    return (
      <div className='bg-[#8ECDDD] text-white font-bold border border-gray-500 my-2 text-3xl py-16 text-start rounded-2xl hover:scale-105 duration-300 cursor-pointer
      flex' > 
        <div className='w-1/3'></div>
        <p className='w-2/3'>{text}</p>
      </div>);
  }
  const MainPage =  () => {
    return(
      <div className='grid grid-cols-2 gap-8 my-8 mx-4'>
      <Link to='questions'><MenuButton text='Questions' linkedPage='questions' /></Link>
      <MenuButton text='Test' linkedPage='test' />
      <MenuButton text='Questions 2' linkedPage='questions' />
      <MenuButton text='Option 4' linkedPage='main'/>
      </div>);
      }

  // based on currentMenu set something into a variable
  return (
    <div className='w-full px-4'>
      <div className='max-w-[1120px] mx-auto py-8'>
        <h1 className='mx-4 font-bold text-5xl py-4'>{category && category.title}</h1>
        <div className='grid grid-cols-2 gap-8 my-8 mx-4'>
          <Link to='questions'><MenuButton text='Questions' linkedPage='questions' /></Link>
          <MenuButton text='Test' linkedPage='test' />
          <MenuButton text='Questions 2' linkedPage='questions' />
          <MenuButton text='Option 4' linkedPage='main'/>
      </div>
      </div>
    </div>
  )
}



export default CategoryMenu
