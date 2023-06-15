import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

  const [blogs, setBlogs] = useState(null) //After the first render, the state will be null! so, below we {blogs && <BlogList blogs={blogs} title='All Blogs' />} so the right part waits until the data is loaded.
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => { //We set this to make the 'Loading...' message more realistic.
      fetch('http://localhost:8000/blogs') //Promise.
        .then(res => { //Response object we get after the promise, which we have to turn into JS.
          //console.log 'res' and you'll see all its properties. 
          return res.json(); //Turning it into JS is another promise.
        })
        .then(data => { //We get the data.
          setBlogs(data) //And we set it as our state(blogs)
          setIsLoading(false) //If we get the data, the 'Loading...' message doesn't make sense. 
          setError(null) //The error message doesn't make sense either. 
        })
        .catch(err => { //This will catch network errors
          setIsLoading(false); //If there is an error, the 'Loading...' message disappears.
          setError(err.message);
        })
    }, 1000);
  }, [])// the array of dependencies, empty so it acts once after the first render. 

  //we want to pass the 'blogs' state into the child BlogList.js, so we do it through props. Remember 'blog' is 'item of blogs'. //Only when the state isLoading is true, the <p> next to it will appear. As soon as we receive the data, it is false. 
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
      {blogs && <BlogList blogs={blogs.filter((blog) => (blog.author === 'mario'))} title="Mario's Blog" />}
    </div>
  )
}

export default Home;