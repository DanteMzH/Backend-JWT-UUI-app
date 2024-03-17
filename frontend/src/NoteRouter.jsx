import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { LoginPage } from './auth/page/LoginPage'
import { useSelector } from 'react-redux';
import { Section } from './note/components/Section';
import { NotesMain } from './note/page/NotesMain';
import { NotesRoutes } from './routes/NotesRoutes';

export const NoteRouter = () => {


  const { isAuth } = useSelector(state => state.auth);

  return (
    <Routes>
          {
            isAuth
            ?
              (<Route path='/notes/*' element ={<NotesRoutes/>} />)
            :
            <>
            <Route path='/login' element ={<LoginPage/>} />
            <Route path='/*' element ={<Navigate to="/login"/>} />
            </>
            }

    </Routes>
  )
}
