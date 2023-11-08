import React from 'react'

const SearchBar = () => {
  return (
    <div className='input flex justify-center  px-5 lg:px-0 py-5 '>
      <input type='text'
        placeholder='search'
        className='shadow-md bg-gray-200 placeholder-gray-400 rounded-l-lg 
        px-2 py-2 w-80 outline-none border-2 border-gray-500 text-black ' />

      <button className='bg-[#FF7474] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500'> Search</button>
    </div>
  )
}

export default SearchBar