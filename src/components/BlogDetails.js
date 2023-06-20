import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

  let { id } = useParams(); //This is the only needed thing to have an id at each article. The {id} below in the title is just for use to know as extra info on the page. 

  return (
    <div className='blog-details'>
      <h2>Blog Details - {id}</h2>
    </div>
  )
}

export default BlogDetails;