import React from 'react'
import { Route, Router } from 'react-router'
import { Hero } from './Index'

const DeskstopRoute = () => {
  return (
    <Router>
         <Route path="" element={<Hero />} />
    </Router>
  )
}

export default DeskstopRoute