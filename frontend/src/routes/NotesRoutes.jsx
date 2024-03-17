import React from 'react'
import { NotesMain } from '../note/page/NotesMain'
import { Route, Routes } from 'react-router-dom'
import { MainNote } from '../note/components/MainNote'
import { NewNote } from '../note/components/NewNote'
import { Section } from '../note/components/Section'

export const NotesRoutes = () => {
  return (
    <div className='flex flex-row w-full h-screen'>

      <Section/>


      <Routes>
          <Route path='new' element={<NewNote/>} />  
          <Route path='all' element={<MainNote/>} />  
      </Routes>  


    </div>
  )
}
