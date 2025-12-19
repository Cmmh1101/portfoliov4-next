import Link from 'next/link'
import React from 'react'
import { SiYoutube, SiInstagram, SiGithub} from 'react-icons/si'
import { RiLinkedinBoxLine} from 'react-icons/ri'


const Connect = () => {
  const iconClasses =
    "text-black bg-white mx-auto mb-3 rounded-md hover:bg-blue-400 hover:-rotate-45 duration-1000 p-1";
  
  return (
    <div className="flex flex-row md:flex-col justify-evenly items-center w-full md:w-1/2  min-h-60 text-6xl">
        <Link href='https://www.linkedin.com/in/carla-montano/' className={iconClasses} target='_blank'><RiLinkedinBoxLine /></Link>
      <Link href='https://github.com/Cmmh1101' className={iconClasses} target='_blank'><SiGithub /></Link>
      <Link href='https://www.instagram.com/carlamontanotech/' className={iconClasses} target='_blank'><SiInstagram /></Link>
        <Link href='https://www.youtube.com/@carlamontanotech' className={iconClasses} target='_blank'><SiYoutube /></Link>
      </div>
  )
}

export default Connect