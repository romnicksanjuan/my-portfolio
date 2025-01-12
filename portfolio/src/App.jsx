import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

import Typewriter from 'typewriter-effect'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

import me from './image/profile.jpeg'


import ImgToTextExplore from './components/ImgToTextExplore';
import MainPage from './MainPage';
import QuizAppExplore from './components/QuizAppExplore';
import Test from './components/Test';
function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/image-to-text-explore' element={<ImgToTextExplore/>} />
        <Route path='/quiz-app-explore' element={<QuizAppExplore/>} />

        <Route path='/test' element={<Test/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
