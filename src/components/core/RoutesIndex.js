import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

export default function RoutesIndex() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
    </Routes>
  )
}
