import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

import Typewriter from 'typewriter-effect'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

import me from './image/profile.jpeg'


import ImgToTextExplore from './components/ImgToTextExplore';
import MainPage from './MainPage';
function App() {

  const home = useRef(null);
  const aboutPage = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToElement = (element) => {
    element.current.scrollIntoView({
      behavior: 'smooth'
    })
  };


  // const texts = ['Programmer', 'Web Developer']
  const texts = ['Programmer', 'Web Developer', 'Mobile Developer'];

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/image-to-text-explore' element={<ImgToTextExplore/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
