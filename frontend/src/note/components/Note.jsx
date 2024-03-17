import React from 'react'

export const Note = () => {


  
  return (
      <div className='flex flex-col h-60 w-2/5 mx-2 my-2 p-2 border rounded-lg border-gray-100'>
        <input type="text" className='w-full h-1/5 rounded-lg focus:outline-none focus:bg-gray-50' placeholder=':: Untitle' />

        <textarea type="text" className='w-full h-3/5 rounded-lg resize-none focus:outline-none focus:bg-gray-50' placeholder=":: What's new today?" />

        <input 
        type="text" 
        className='w-full h-1/5 rounded-lg focus:outline-none focus:bg-gray-50'
         placeholder='tag' />

        <div className="flex h-1/5 items-center justify-between dark:text-gray-400 ">

            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-color-secondary text-gray-800 flex items-center justify-center focus:outline-none  ">
                <i className='fa-solid fa-pen'></i>
            </button>
            
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-color-delete text-gray-800 flex items-center justify-center focus:outline-none  ">
                <i className='fa-solid fa-trash-can'></i>
            </button>

        </div>
      </div>      
  )
}
