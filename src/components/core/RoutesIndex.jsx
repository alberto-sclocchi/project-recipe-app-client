import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Recipes from './Recipes'

export default function RoutesIndex() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about-me" element={<AboutMe />} />
        <Route exact path="/recipes" element={<Recipes />} />
    </Routes>
  )
}
