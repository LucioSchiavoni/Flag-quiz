import React, { useContext, useEffect, useState} from 'react';

import authContext from '@/context/auth/authContext';


export const Header = () => {

  const AuthContext = useContext(authContext)
  const  {user, logout, loginWithGoogle } = AuthContext;
  const [error, setError] = useState();

const handleGoogleSignIn = async () => {
    try {
        await loginWithGoogle();
    } catch (error) {
        setError(error.message);
    }
}

    console.log(user)

    return (
        <>
{user ? ( <> <div className='w-full bg-white shadow-lg shadow-gray-800  navbar'>
           <p className='text-black w-24 ' >Quiz app</p> 
       
                <div className='w-64 space-x-5'>
      
    <p>Hola! {user.displayName}</p>
 <img src={user.photoURL} alt="foto" className='rounded-full w-12 border  shadow-lg shadow-black'/>
                 
   <button className='h-10 bg-black p-2 rounded-lg text-white' onClick={logout}>Logout</button>
      </div> 
      </div></>):(

    <>   <div className='w-full bg-white space-x-20 navbar'>
           <p className='text-black '>Quiz app</p> 
       
                <div className=' navbar-end'>
      
        <button className='h-10 text-white rounded p-4 py-2  bg-black' onClick={handleGoogleSignIn}>Login</button>
      
      </div> 
      </div>
      </>


)}

     
      </>
    );
}

