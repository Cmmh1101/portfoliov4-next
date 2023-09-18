import React from 'react'

interface HeaderProps {
  title?: string
  subTitle?: string
  customClass?: string
}

const Header: React.FC<HeaderProps> = ({title, subTitle, customClass}) => {
  return (
    <div className='mb-8'>
      {title && <h1 className={`text-5xl ${customClass}`}>{title}</h1>}
      {subTitle && <h2 className={`${customClass} text-4xl`}>{subTitle}</h2>}
    </div>
      
  )
}

export default Header