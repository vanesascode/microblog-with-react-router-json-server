import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error'>
      <h1>Sorry...</h1>
      <p>That page cannot be found</p>
      <Link to='/' className='error-link'>Back to the Home Page...</Link>
    </div>
  )
}

export default ErrorPage