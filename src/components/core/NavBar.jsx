import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/recipes">Recipes</Link>
    </nav>
  )
}
