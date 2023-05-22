
import { Inter } from '@next/font/google'
import { useContext, useState} from 'react'
import  ShowQuiz from './ShowQuiz.jsx'
import { Layout } from '@/components/Layout.js'
import authContext from '@/context/auth/authContext.js'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const AuthContext = useContext(authContext)
  const { user, loginWithGoogle } = AuthContext;
const [error, setError] = useState()
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>  
<Layout>
{
  user ? ( <><div className='text-white'>
    <h1 className='text-center font-bold text-3xl '>Quiz Flags</h1>
       
<ShowQuiz/>
          </div>  </>) : (<>
          
          <div className='h-96 flex items-center justify-center'>
                <div className='grid grid-cols-1 gap-10 text-white  p-10 border rounded shadow-lg shadow-black text-2xl bg-[url(https://images.hdqwalls.com/download/google-original-material-image-2560x1440.jpg)] bg-cover h-64 '>
            <p> Inicia sesion con Google</p>
                  <button className='h-10 rounded  bg-gray-200 text-2xl border border-white shadow-lg shadow-gray-800 text-black' onClick={handleGoogleSignIn} >Login</button>
           </div>
           </div>
          </>)
}

</Layout>
    </>
  )
}
