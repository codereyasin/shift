import React from 'react'
import { About, Contact, Hero, Learn, OnlineStore, Ourvision } from '../components/Index'

const AllSection = () => {
  return (
    <div className=''>
    <Hero/>
    <About/>
    <Ourvision />
    <OnlineStore/>
    <Contact/>
    <Learn/>
    </div>
  )
}

export default AllSection