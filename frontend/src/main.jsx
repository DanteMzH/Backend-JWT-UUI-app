import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { Section } from '../src/note/components/Section.jsx'
import { LoginPage } from '../src/auth/page/LoginPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NoteRouter } from './NoteRouter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter>

      {/* <Section/> */}
         <NoteRouter/>

      </BrowserRouter>
    </Provider>
)
