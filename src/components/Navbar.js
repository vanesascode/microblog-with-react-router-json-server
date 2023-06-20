import React from 'react';
import { Link } from 'react-router-dom';

//We use the 'Link to=' rule in order to avoide that another request is sent to the server everytime we click on a route. In the Chrome tools you'll see they are like <a href='' /> tags. 

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Your Microblog</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create' style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}>New Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar;