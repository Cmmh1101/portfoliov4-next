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
        url: "/projects",
        title: "projects"
    },{
        url: "/about",
        title: "about"
    },{
        url: "/experience",
        title: "experience"
    },
    {
        url: "/connect",
        title: "connect"
    },
    {
        url: "/blog",
        title: "blog"
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