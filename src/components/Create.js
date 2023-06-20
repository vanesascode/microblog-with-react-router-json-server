import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  let navigate = useNavigate(); //you call this function so you can navigate from here to any other link with the button below or whatever you like. 

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>

      <button onClick={() => { navigate('/') }}>Cancel new blog</button>
    </div>
  )
}

export default Create;
