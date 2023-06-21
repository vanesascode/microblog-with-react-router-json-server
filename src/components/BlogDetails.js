import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

  let { id } = useParams(); //This is the only needed thing to have an id at each article. The {id} below in the title is just for use to know as extra info on the page. 
  const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id)

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })
  }

  //React-router Navigation: 
  let navigate = useNavigate(); //you call this function so you can navigate from here to any other link with the button below or whatever you like. 

  return (
    <div className='blog-details'>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{id}.  {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <div className='erase-button-container'>
            <button onClick={handleClick}>Delete</button>

          </div>
        </article>
      )}

    </div>
  )
}

export default BlogDetails;