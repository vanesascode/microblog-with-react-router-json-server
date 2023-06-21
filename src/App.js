import Navbar from './components/Navbar';
import Create from './components/Create';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import BlogDetails from './components/BlogDetails';

//The Router tag has to be the main wrapper
//It's important that the '<Route path='' element={} />' rules are surrounded by the <Routes> tag to make sure that only one Route component shows in the browser any one time. 

//The Route * has to be the last one you add to your list.

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </div>

      <div className='footer'>
        <div className='by-container'>
          <p>By <a href='https://github.com/vanesascode' target='_blank' rel='noreferrer'>vanesascode</a></p>
        </div>
      </div>

    </Router>
  );
}



export default App; 
