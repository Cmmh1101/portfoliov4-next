import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const SingleProjectPage = (props: Props) => {
    const router = useRouter()
    const projectName = router.query.projectsName
  return (
    <div>Single Project Page</div>
  )
}

export default SingleProjectPage