import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null) //After the first render, the state will be null! so, below we set {blogs && <BlogList blogs={blogs} title='All Blogs' />} in the Home.js, so the right part waits until the data is loaded.
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => { //We set this to make the 'Loading...' message more realistic.
      fetch(url) //Promise.
        .then(res => { //Response object we get after the promise, which we have to turn into JS.
          //console.log 'res' and you'll see all its properties. 
          return res.json(); //Turning it into JS is another promise.
        })
        .then(data => { //We get the data (the term doesn't have anything to do with the state 'data', it's just coincidence)
          setData(data) //And we set it as our state(blogs in the Home.js) In here, data is the state, not the data we receive in the previous state!
          setIsLoading(false) //If we get the data, the 'Loading...' message doesn't make sense. 
          setError(null) //The error message doesn't make sense either if we get the data correctly. 
        })
        .catch(err => { //This will catch network errors
          setIsLoading(false); //If there is an error, the 'Loading...' message disappears.
          setError(err.message); //and the error message appears
        })
    }, 1000);

  }, [url])// The array of dependencies, empty so it acts only once after the first render. Or, we put the url, so, everytime the url changes, the data gets loaded, but not when other changes happen. 

  return { data, isLoading, error } //We are exporting the values we want to get when we invoke our custom hook 'useFetch'. It could also be an array with each state in an index, but being in an object it doesn't matter the order. 
}

export default useFetch;