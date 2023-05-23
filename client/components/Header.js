import React, { useContext, useEffect, useState} from 'react';
import authContext from '@/context/auth/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
    console.log("Give me a job :)")

    return (
      
        <>
      
        {user ? (<> <div className='w-full glass space-x-10 bg-cover shadow-lg shadow-gray-800  navbar'>
          
       
                <div className=' space-x-5'>
     <div className='flex text-white w-64 gap-2'>
            <p className='w-18 mt-2'>Hola!👋 </p>
            <p className='w-28 mt-2 '>{user.displayName}</p>
            </div>
 <img src={user.photoURL} alt="foto" className='rounded-full w-12 border    shadow-lg shadow-black'/>
                 
            <button className='h-10 bg-gray-300 text-black border border-white shadow-lg shadow-gray-700 p-2 rounded-lg ' onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
      </div> 
      </div></>):(

    <>   <div className='w-full glass space-x-20 navbar '>
          
       
            <p className='text-black text-2xl ml-24 p-2 font-bold font-mono'>Quiz Flags</p>
      </div>
      </>


)}

     
      </>
    );
}

