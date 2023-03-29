import React from 'react'
import GetStarted from './GetStarted'
import Faq from './Faq'
import Footer from './Footer'
import Cards from './Cards'

const Home = () => {
  return (
    <div className='bg-black h-screen'>
        <GetStarted></GetStarted>
        <Cards></Cards>
        <Faq></Faq>
        <Footer></Footer>
    </div>
  )
}

export default Home