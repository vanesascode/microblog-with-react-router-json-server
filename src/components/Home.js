import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  const [blogs, setBlogs] = useState(null) //after the first render, the state will be null! so***

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => (blog.id !== id));
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs') //promise
      .then(res => { //response object, which we have to turn into JS
        return res.json() //another promise
      })
      .then(data => {//we get the data
        setBlogs(data) //and we set it as our state(blogs)
      })
  }, [])

  //we want to pass the 'blogs' state into the child BlogList.js, so we do it through props. Remember 'blog' is 'item of blogs'. 
  return (
    <div className='home'>
      {blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />}
      {blogs && <BlogList blogs={blogs.filter((blog) => (blog.author === 'mario'))} title="Mario's Blog" handleDelete={handleDelete} />}
    </div>
  )
}

export default Home