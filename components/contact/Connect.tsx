import Link from 'next/link'
import React from 'react'
import { SiYoutube, SiTwitter, SiGithub} from 'react-icons/si'
import { RiLinkedinBoxLine} from 'react-icons/ri'


const Connect = () => {
  const iconClasses =
    "text-black bg-white mx-auto mb-3 rounded-md hover:bg-blue-400 hover:-rotate-45 duration-1000 p-1";
  
  return (
    <div className="flex justify-evenly items-center w-full  h-60 text-6xl">
        <Link href='https://www.linkedin.com/in/carla-montano/' className={iconClasses} target='_blank'><RiLinkedinBoxLine /></Link>
        <Link href='https://github.com/Cmmh1101' className={iconClasses} target='_blank'><SiGithub /></Link>
        <Link href='/' className={iconClasses} target='_blank'><SiYoutube /></Link>
        <Link href='https://twitter.com/cmmh11'className={iconClasses} target='_blank'><SiTwitter /></Link>
      </div>
  )
}

export default Connect