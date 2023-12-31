# Microblog using REACT, REACT ROUTER, and a fake REST API using JSON SERVER

When you load the project in your VS CODE, you must:

- [x] run `npm instal` (to download the packages that the package.json indicates)
- [x] run `npx json-server --watch data/db.json --port 8000` (to have the fake REST API running)
- [x] run `npm start` in another terminal. 

***

https://github.com/vanesascode/Microblog-with-REACT/assets/131259155/dfbed416-4834-48e8-a202-16388aa6a21a

***
The code is full of learning notes. I left them because they helped me when learning and help me revise when I need them. Hopefully they help you too. 

## Features of 'Your Microblog':

- I used Json Server to create a fake Rest Api and keep the data. You can fetch it and also either have an error mesage, or a 'Loading...' message while the Json file is being loaded into the app (to make it more realistic).
- useFetch.js is a custom hook to fetch the data in a reusable way. 
- You can create your own articles and delete them. 
- I used React Router for the first time to deal with different links inside the app. It's fantastic because it avoids sending lots of requests to the server. 

