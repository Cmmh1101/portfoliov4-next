import React from 'react'
import Connect from '../components/contact/Connect'
import Header from '../components/UI/Header'

type Props = {}

const contact = (props: Props) => {
  return (
    <div className="container h-36 min-h-[92vh]  py-20 mx-auto">
         <Header title='Ways to connect' />
          <Connect />
    </div>
  )
}

export default contact