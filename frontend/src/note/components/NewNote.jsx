import React, { useState } from 'react'
import { useUsers } from '../hooks/useUsers';

export const NewNote = () => {

  const {handlerAddUser} = useUsers();

  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, tag } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
        ...userForm,
        [name]: value,
    })
  }


  const onSubmit = (event) => {
    event.preventDefault();
    handlerAddUser(userForm);
  }

  return (
    <div className='w-full h-screen  '>

    <div className="w-full h-4/5 mt-10 flex flex-col justify-center items-center bg-white rounded-lg mb-6 py-5 px-1">
                        
                        <form 
                        onSubmit={ onSubmit}
                        className=' flex flex-col w-4/5 mx-5 h-4/5 border rounded-lg border-gray-100 p-3'>
                          
                          <input 
                          onChange={onInputChange}
                          name='title' 
                          type="text" 
                          className='w-full h-1/5 rounded-lg focus:outline-none focus:bg-gray-50'
                          placeholder=':: Untitle' />

                          <textarea 
                          onChange={onInputChange}
                          name='description'
                          type="text" 
                          className='w-full h-3/5 rounded-lg resize-none focus:outline-none focus:bg-gray-50' 
                          placeholder=":: What's new today?" />

                          <input 
                          onChange={onInputChange}
                          name='tag' 
                          type="text" 
                          className='w-full h-1/5 rounded-lg focus:outline-none focus:bg-gray-50'
                          placeholder='tag' />


                          <div className="flex h-1/5 items-center justify-between dark:text-gray-400 ">

                              <button
                              type="submit"
                              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-color-secondary text-gray-800 flex items-center justify-center focus:outline-none  ">
                                  <i className='fa-solid fa-check'></i>
                              </button>
                          </div>


                        </form>
    </div>
    </div>
  )
}
