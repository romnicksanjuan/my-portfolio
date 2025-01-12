import React, { useState } from 'react'
import '../css/Project.css'
import '../css/mobile/mobile-size-project.css'
import image_to_text from '../image/project-images/image-to-text.jpg'
import quiz_image from '../image/project-images/quiz-image.jpg'

// web images
import pos_image from '../image/web-images/pos-image.png'
import e_commerce from '../image/web-images/e-commerce-image.png'
import ImgToTextExplore from './ImgToTextExplore'
import { useNavigate } from 'react-router-dom'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = [
        { img: e_commerce, title: 'E-COMMERCE/SHOPEE CLONE', link: 'https://e-commerce-x81l.vercel.app/' },
        { img: pos_image, title: 'POINT OF SALE', link: 'https://point-of-sale-teal.vercel.app/' }
    ]

    const left = () => {
        setCurrentIndex(prev => prev <= 0 ? slides.length - 1 : prev - 1)
    }

    const right = () => {
        setCurrentIndex(prev => prev === slides.length - 1 ? 0 : prev + 1)
    }
    return (
        <div style={{ marginTop: '50px' }}>
            <h2 style={{ color: '#9BEC00' }}>PROJECTS</h2>
            <div className='project-main'>

                <div>
                    <h3 style={{ color: 'white', textAlign: 'center', margin: '35px 0 10px 0' }}>MOBILE PROJECTS</h3>

                    <div className='project-sub-main' >
                        <div className='sub-container'>
                            <div className='project-image'>
                                <img className='mobile-image' src={image_to_text} alt="" />
                            </div>

                            <div className='project-container'>
                                <div className='project-inner-container'>
                                    <h4 style={{ color: 'yellowgreen', marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                                    <h2 style={{ color: 'white', marginBottom: '10px', textAlign: 'center', fontSize: '13px' }}>IMAGE TO TEXT CONVERSION</h2>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <button onClick={() => window.open('/image-to-text-explore', '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='sub-container'>
                            <div className='project-image'>
                                <img className='mobile-image' src={quiz_image} alt="" />
                            </div>

                            <div className='project-container'>
                                <div className='project-inner-container'>
                                    <h4 style={{ color: 'yellowgreen', marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>REACT NATIVE - ANDROID MOBILE APP</h4>
                                    <h2 style={{ color: 'white', marginBottom: '10px', textAlign: 'center', fontSize: '13px' }}>LEARN QUEST - QUIZ APP</h2>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <button onClick={() => window.open('/quiz-app-explore', '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className='project-main'>
                <h3 style={{ color: 'white', textAlign: 'center', margin: '35px 0 10px 0' }}>WEB PROJECTS</h3>

                <div className='wrapper-container'>
                    <div className="slider-wrapper">
                        <div
                            className="slider"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div className='web-container' key={index}>
                                    <div className='project-image'>
                                        <img className='web-image' src={slide.img} alt="" />
                                    </div>

                                    <div className='project-container'>
                                        <div className='project-inner-container'>
                                            <h4 style={{ color: 'yellowgreen', marginBottom: '10px', textAlign: 'center', fontSize: '14px' }}>REACT WEBSITE</h4>
                                            <h2 style={{ color: 'white', marginBottom: '10px', textAlign: 'center', fontSize: '15px' }}>{slide.title}</h2>

                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <button onClick={() => window.open(slide.link, '_blank')} className='explore-button'>EXPLORE PROJECT</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>


                    </div>

                    <div className='left-icon' onClick={() => left()}>
                        <FaChevronLeft className='left' color='black' />
                    </div>

                    <div className='right-icon' onClick={() => right()}>
                        <FaChevronRight className='right' color='black' />
                    </div>
                </div>




            </div>



        </div>


    )
}

export default Project
