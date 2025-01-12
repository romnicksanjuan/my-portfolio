import { useRef, useState } from 'react';
import './App.css'

import Typewriter from 'typewriter-effect'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'

import me from './image/profile.jpeg'

import img from './image/web-images/pos-image.png'
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
function MainPage() {

  const [isOpen, setIsOpen] = useState(false)

  console.log(!isOpen)

  const home = useRef(null);
  const aboutPage = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const scrollToElement = (element) => {
    element.current.scrollIntoView({
      behavior: 'smooth'
    })
  };

  const toggleButton = () => setIsOpen(!isOpen)


  // const texts = ['Programmer', 'Web Developer']
  const texts = ['Programmer', 'Web Developer', 'Mobile Developer'];

  return (
    <>
      <div>
        <header>
          <a href="#logo" className='logo'>Nick<span style={{ color: '#9BEC00' }}>.dev</span></a>

          <div className="menu-icon" onClick={toggleButton}>
            {!isOpen ? <FaBars size={24} /> : ''}
          </div>

          <nav className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleButton}>
            <div className='times-icon'>
              {isOpen ? <FaTimes size={24} /> : ''}
            </div>
            <ul>
              <li><a href="#home" onClick={() => scrollToElement(home)}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToElement(aboutPage)}>About</a></li>
              <li><a href="#project" onClick={() => scrollToElement(project)}>Project</a></li>
              <li><a href="#contact" onClick={() => scrollToElement(contact)}>Contact</a></li>
            </ul>
          </nav>

          <nav>
            <a id='home' href="#home" onClick={() => scrollToElement(home)}>Home</a>
            <a id='about' href="#about" onClick={() => scrollToElement(aboutPage)}>About</a>
            <a id='project' href="#project" onClick={() => scrollToElement(project)}>Project</a>
            <a id='contact' href="#contact" onClick={() => scrollToElement(contact)}>Contact</a>
          </nav>
        </header>

        <section ref={home}>

          <div className="name">
            <h2 className='intro'>Hi, its Romnick San Juan</h2>
            <h1 className='texts'>
              <Typewriter
                options={{
                  strings: texts,
                  autoStart: true,
                  loop: true,
                  delay: 75
                }}
              />
            </h1>



            <p>
              I am a passionate web and mobile developer with over 1 year of
              experience in building scalable applications. I specialize in React
              Native and Expo for mobile development
              and have a strong background in full-stack web
              development using React and Node.js.
            </p>
            <div className='icons'>
              <button style={{ width: '125px', height: '30px', borderRadius: '20px', backgroundColor: '#9BEC00', border: 'none' }}>
                <a id='facebook' href="https://drive.google.com/file/d/1hhim5lv2uRVjlFSKuvsawCb0ouB_GVaN/view?usp=sharing"
                  style={{ textDecoration: 'none', color: 'blwack', fontSize: '14px', fontWeight: 'bold' }}>Download CV</a>
              </button>

              <a id='facebook' href="https://web.facebook.com/romnick.sanjuan.3"><FaFacebook size={27} style={{
                color: '#9BEC00',
                margin: '0 10px'
              }} /></a>
              <a href="" id='instagram'><FaInstagram size={27} style={{
                color: '#9BEC00',
                margin: '0 10px'
              }} /></a>

              <a href=""><FaTiktok size={27} style={{
                color: '#9BEC00',
                margin: '0 10px'
              }} /></a>

              <a href=""><FaTwitter size={27} style={{
                color: '#9BEC00',
                margin: '0 10px'
              }} /></a>
            </div>

          </div>
          <div className="image-container">
            <img className='image' src={me} alt="" />
          </div>
        </section >

        <section ref={aboutPage}>
          <About />

        </section>
        <section ref={project}>
          <Project />
        </section>
        <section ref={contact}>
          <Contact />
        </section>
      </div >
    </>
  )
}

export default MainPage
