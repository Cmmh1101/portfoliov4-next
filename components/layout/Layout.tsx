import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
    children: JSX.Element | JSX.Element[]
  };
  

const Layout = ({children}: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout