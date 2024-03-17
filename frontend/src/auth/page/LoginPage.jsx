import React from 'react'
import { Header } from '../components/Header'
import { Login } from '../components/Login'
import { Footer } from '../components/Footer'



export const LoginPage = () => {
  return (
    <div className='flex flex-col h-screen '>

      <div className='h-1/6'>
        <Header/>
      </div>

      <div className='h-4/6'>
        <Login/>
      </div>

      <div className='h-1/6 '>
        <Footer/>
      </div>

    </div>
  )
}
