import React from 'react'
import { Note } from './Note'

export const MainNote = () => {
  return (

   <div className='w-full h-screen  overflow-y-scroll'>

    <div class="flex flex-wrap justify-center w-full h-screen mt-5 bg-white rounded-lg mb-6 py-5">
                          
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>

    </div>
   </div> 
  )
}
