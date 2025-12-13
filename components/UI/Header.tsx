import React from 'react'

interface HeaderProps {
  title?: string
  subTitle?: string
  customClass?: string
}

const Header: React.FC<HeaderProps> = ({title, subTitle, customClass}) => {
  return (
    <div className='mb-8 capitalize'>
      {title && <h1 className={`text-6xl ${customClass}`}>{title}</h1>}
      {subTitle && <h2 className={`${customClass} text-5xl`}>{subTitle}</h2>}
    </div>
      
  )
}

export default Header