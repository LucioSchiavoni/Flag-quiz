import React from 'react'
import { Header } from './Header'
import Footer from '@/pages/Footer'
import Head from 'next/head'


export const Layout = ({ children }) => {
    return (
        <>
            <Head>

                <title>Flags App</title>
            </Head>
            <div className='w-full text-slate-500 bg-[url(https://wallpapercave.com/wp/wp7812715.jpg)] bg-cover
              bg-no-repeat   '>
                <div className=''>
                    <Header />
                    <main className='mt-20'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}