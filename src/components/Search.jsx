import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='flex gap-2'>
      
      <div className='relative flex items-center flex-grow'>
      <FiSearch className='text-white text-3xl absolute ml-1' />
      <input type="text" className=" bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9" />
   
    </div><AiFillPlusCircle className='cursor-pointer text-5xl text-white'/>
    </div>
  )
}

export default Search
