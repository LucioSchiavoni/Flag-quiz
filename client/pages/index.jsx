
import { Inter } from '@next/font/google'
import { useContext } from 'react'
import  ShowQuiz from './ShowQuiz.jsx'
import { Layout } from '@/components/Layout.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>  
<Layout>
<div className='text-white'>
    <h1 className='text-center font-bold text-3xl '>Quiz Flags</h1>
       
<ShowQuiz/>
</div>
</Layout>
    </>
  )
}
