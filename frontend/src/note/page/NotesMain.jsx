import React from 'react'
import { Section } from '../components/Section'
import { MainNote } from '../components/MainNote'
import { NewNote } from '../components/NewNote'
import { Route, Routes } from 'react-router-dom'

export const NotesMain = () => {
  return (

      <Routes>

          <Route path='/all' element={<MainNote/>} />    
          <Route path='/new' element={<NewNote/>} />    


      </Routes>

  )
}
