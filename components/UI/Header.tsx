import React from 'react'

interface HeaderProps {
  title?: string
  subTitle?: string
}

const Header: React.FC<HeaderProps> = ({title, subTitle}) => {
  return (
    <>
      {title && <h1 className='text-5xl'>{title}</h1>}
      {subTitle && <h2 className='text-4xl'>{subTitle}</h2>}
    </>
      
  )
}

export default Header