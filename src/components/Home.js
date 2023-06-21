import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {

  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs') //we change the name of data to 'blogs' in this context, and then we use 'blogs' below.

  //we want to pass the 'blogs' state (that has all the data fetched, in our useFetch.js) into the child BlogList.js, so we do it through props. Remember 'blog' is 'item of blogs'. //Only when the state isLoading is true, the <p> next to it will appear. As soon as we receive the data, it is false.  // It is important the rule 'blogs && etc...' so data is loaded before the component Bloglist renders. 

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
      {/* {blogs && <BlogList blogs={blogs.filter((blog) => (blog.author === 'Sarah'))} title="Latest Blog" />} */}
    </div>
  )
}

export default Home;