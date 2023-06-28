# Microblog using REACT, REACT ROUTER, and a fake REST API using JSON SERVER

When you load the project in your VS CODE, you must run: 
### `npx json-server --watch data/db.json --port 8000`
This way, you have the fake REST API running. 


The code is full of learning notes. I left them because they helped me when learning and help me revise when I need them. Hopefully they help you too. 

## Features of 'Your Microblog':

- I used Json Server to create a fake Rest Api and keep the data. You can fetch it and also either have an error mesage, or a 'Loading...' message while the Json file is being loaded into the app (to make it more realistic).
- useFetch.js is a custom hook to fetch the data in a reusable way. 
- You can create your own articles and delete them. 
- I used React Router for the first time to deal with different links inside the app. It's fantastic because it avoids sending lots of requests to the server. 

