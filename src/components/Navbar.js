import React from 'react';
import { Link } from 'react-router-dom';
import sun from '../assets/sun.webp'


//We use the 'Link to=' rule in order to avoide that another request is sent to the server everytime we click on a route. In the Chrome tools you'll see they are like <a href='' /> tags. 

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Your Microblog</h1>
      <img className='rotate' src={sun} />
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create' className='new-blog-button'>New Blog</Link>
      </div>
    </nav >
  )
}

export default Navbar;