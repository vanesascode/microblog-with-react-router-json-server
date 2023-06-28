import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Create = () => {

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; //The split('T')[0] method is used to split the string at the 'T' character and retrieve only the date part of the ISO string. 
    setDate(formattedDate);
  }, []);

  //Controlled Inputs: 
  const [title, setTitle] = useState(' ');
  const [body, setBody] = useState(' ');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('Sarah');
  const [isPending, setIsPending] = useState(false);

  //Submit Event:
  const handleSubmit = (e) => {
    e.preventDefault(); //IMPORTANT: it avoids the input to disappear from the screen when you submit(the default action of the page refreshing when we press the button) and most importantly, lets you get the object we need below.
    const blog = { title, body, author, date } //this creates the object (console.log 'blog' and you will see)

    //POST request: 
    //while the data is not posted, we'll set a message that it is still pending: 
    setIsPending(true);
    //Now we send the request. The second argument of 'fetch' is where we tackle the data but also where we define the type of request, the method.
    setTimeout(() => { //We set this to make the 'Adding Blog...' message more realistic.
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, //it sets the header of the HTTP request to specify that the content being sent is in JSON format. 
        body: JSON.stringify(blog) //we are sending the object we created before in this very same function, but into a json string. 
        //The 'Json Server' will add the 'id' property automatically as well. 
        //Since this fetching is asynchronous and it returns a promise we can tack on a 'then' method which fires a function when this is complete, in order to say that setIsPending is now false:
      }).then(() => {
        setIsPending(false);
        navigate('/'); //after the data is catched we navigate to our Home page again thanks to React Router. 
      })
    }, 1000);
  }



  //React-router Navigation: 
  let navigate = useNavigate(); //you call this function so you can navigate from here to any other link with the button below or whatever you like. 

  return (
    <div className='create'>
      <div className='create.header'>
        <h2>Add a New Blog<span style={{ marginLeft: '10px' }}><i class="fa-solid fa-sun" style={{ color: 'gold' }} ></i></span></h2>

      </div>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} //anonymous function with the 'e' object, to define what is the 'title' state going to be
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value='Sarah'>Sarah</option>
          <option value='Laura'>Laura</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>


      <button onClick={() => { navigate('/') }}>Cancel</button>
    </div>
  )
}

export default Create;
