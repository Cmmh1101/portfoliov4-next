import Link from 'next/link'
import React from 'react'

interface LinkProps {
    url: string;
    title: string
}

const links = [
    {
        url: "/",
        title: "home"
    },
    {
        url: "/",
        title: "projects"
    },{
        url: "/",
        title: "about"
    },{
        url: "/",
        title: "experience"
    },
]

const NavLinks = () => {
  return (
      <nav className='flex justify-around capitalize'>
          {links.map((link, i) => {
              return (
                  <Link href={link.url} key={i} className='mx-4'>{link.title}</Link>
              )
          })}
          
      </nav>
  )
}

export default NavLinks