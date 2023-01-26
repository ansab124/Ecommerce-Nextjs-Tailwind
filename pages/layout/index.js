import React from 'react'
import Footer from './footer'
import Header from './header'

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='container px-10 mb-10'>{children}</main>
            <Footer />
        </>
    )
}

export default AppLayout
