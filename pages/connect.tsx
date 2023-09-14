import React from 'react'
import ContactMe from '../components/contact/Connect'
import Header from '../components/UI/Header'

type Props = {}

const contact = (props: Props) => {
  return (
    <div className="container min-h-[92vh] h-auto py-20 mx-auto">
         <Header title='Ways to connect' />
          <ContactMe />
    </div>
  )
}

export default contact