import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const { user, setUser } = useContext( UserContext );

  return (
    <>
        <h1>Login Page</h1>
        <hr />
        <pre aria-label='preLogin'>
          { JSON.stringify( user, null, 3)}
        </pre>
        <button 
          aria-label='spanButton'
          className='btn btn-primary'
          onClick={ () => setUser (
            {id: 123, name: 'Juan', email: 'juan@google.com'})}>
          Establecer Usuario
        </button>
    </>

   
  )
}

