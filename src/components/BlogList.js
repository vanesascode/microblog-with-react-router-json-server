import React from 'react'

const BlogList = ({ blogs, title }) => {

  //We don't create the function for the button here because we shouldn't edit the props directly. The data is initialized in the Home.js component. We need to use the method 'setBlogs' in Home.js to update the state. So, we create the function in Home.js and then we pass it here as a prop. 

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => ( //Map Method has a callback function that returns a bit of jsx template. 'blog' is to refer to each item of the array state 'blogs' that is in 'Home.js'. onClick is an arrow function because we need to pass the argument id.
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}

    </div>
  )
}

export default BlogList