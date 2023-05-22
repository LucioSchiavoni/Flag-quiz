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
            <div className='w-full text-slate-500 bg-gradient-to-r from-sky-900 to-sky-500
              bg-no-repeat bg-cover'>
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
