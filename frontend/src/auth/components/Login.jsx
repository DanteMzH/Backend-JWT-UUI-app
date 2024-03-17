import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth';

const initialLoginForm = {
    username: '',
    password: '',
}


export const Login = () => {

const { handlerLogin } = useAuth();
        


const [loginForm, setLoginForm] = useState(initialLoginForm)
const { username, password } = loginForm;


const onInputChange = ({target}) =>{
    const { name, value } = target;
    setLoginForm({
        ...loginForm,
        [ name ]: value,
    })
}

const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
        console.log("Falta usuario");
    }

    handlerLogin({username, password});
    
    setLoginForm(initialLoginForm);
}


return (

<div className=" text-black flex flex-col items-center pt-10 sm:justify-center sm:pt-0">

    <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
            bis_skin_checked="1"></div>
        <div
            className="mx-5 border rounded-lg shadow-lg ">
            <div className="flex flex-col p-6  items-center">
                <h3 className="text-3xl font-semibold leading-6 tracking-tighter">Login</h3>
            </div>
            <div className="p-6 pt-0">
                <form onSubmit={ onSubmit }>
                    <div>
                        <div>
                            <div
                                className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div className="flex justify-between">
                                    <label
                                        className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Username</label>
                                    <div className="absolute right-3 translate-y-2 text-green-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" className="w-6 h-6">
                                                                    <path fillRule="evenodd"
                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                    clipRule="evenodd" />

                                                </svg>
                                            </div>
                                </div>
                                <input 
                                type="text" 
                                name="username" 
                                autoComplete="current-password"
                                placeholder="Username"
                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                                onChange={onInputChange}
                                />
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <div
                                className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div className="flex justify-between">
                                    <label
                                      
                                        className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                    type="password" 
                                    name="password" 
                                    autoComplete="current-password"
                                    placeholder="Password"
                                    className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                    onChange={onInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end gap-x-2">
                        <a className="inline-flex  hover:bg-black hover:text-white items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                            href="/register">Register</a>
                        <button
                            className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                            type="submit"
                            
                            >Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
