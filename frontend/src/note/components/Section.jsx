import React from 'react'
import { useAuth } from '../../auth/hooks/useAuth';
import { Link } from 'react-router-dom';
import { MainNote } from './MainNote';
import { NotesMain } from '../page/NotesMain';

export const Section = () => {

    const {handlerLogout} = useAuth();


  return (

      <div  className='w-1/5'>
        <aside className=" flex flex-col shrink-0 h-screen bg-white border border-gray-200 " >
                    <div className="flex flex-col h-1/5 border border-gray-200">

                        <button 
                        className="flex  text-stone-500 mb-2 h-1/3 pl-6 mt-2" 
                        onClick={handlerLogout}
                        >
                            <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark">
                                <i className='fa-solid fa-right-from-bracket text-xl'></i>
                            </span>
                        </button>

                        <div className='h-1/3 w-14 pl-4 '>
                            <img src="https://icons.veryicon.com/png/Game/Super%20Mario%201/Paper%20Mario.png" alt="Photo" />
                        </div>

                        <div className='h-1/3 pl-4 '>
                            <a className="font-medium dark:text-neutral-400/90 ">Dante</a>
                        </div>
                        
                    </div>


                    <div className="flex flex-col h-3/5 w-full font-medium text-left overflow-y-scroll py-5">

                        <div >

                            <Link to="new" className="flex  flex-grow text-stone-500 mb-2 gap-2  pl-2  ">

                                <span>
                                <i className='fa-solid fa-plus' ></i>
                                </span>

                                <span>
                                <div>New </div>
                                </span>

                            </Link>

                            <Link to="all" className="flex  flex-grow text-stone-500 mb-2 gap-2  pl-2  ">
                                
                                <span>
                                <i className='fa-solid fa-clipboard-list' ></i>
                                </span>

                                <span>
                                <div>Notes </div>
                                </span>

                            </Link>

                        
                        </div>

                    </div>
                    <div  className="flex flex-col h-1/5 py-5 font-medium">
                        <div>

                        <a  className="flex  flex-grow text-stone-500 mb-2 gap-2  pl-2 ">
                                
                                <span>
                                <i className='fa-solid fa-trash-can' ></i>
                                </span>

                                <span>
                                <div>Trash </div>
                                </span>

                        </a>

                        </div>
                    </div>
        </aside>
      
  </div>

)
};
