import React, { useRef, useState } from 'react'
import register from '../image/quiz-app/img1.jpg'
import login from '../image/quiz-app/img2.jpg'
import home from '../image/quiz-app/img3.jpg'
import createTitle from '../image/quiz-app/img4.jpg'
import createQuestion from '../image/quiz-app/img5.jpg'
import quizRecord from '../image/quiz-app/img6.jpg'
import quizPage from '../image/quiz-app/img7.jpg'
import setting from '../image/quiz-app/img8.jpg'
import questionsPage from '../image/quiz-app/img9.jpg'

import videoDemo from '../videos/quiz-app-video.mp4'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const images = [register, login, home,createTitle, questionsPage,  createQuestion,  quizPage, quizRecord,setting,]

const QuizAppExplore = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const videoRef = useRef()

    const nextSlide = () => {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }
    return (
        <>
            <div style={{ display: 'flex', width: '90%', justifyContent: 'center', margin: '20px auto', gap: '200px', borderRadius: '15px', backgroundColor: '#2c2929', padding: '20px' }}>
                <div>
                    <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>Images</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        width: '450px',
                        height: 'auto',
                        // margin: 'auto',
                        overflow: 'hidden',
                        borderRadius: '10px',
                        // backgroundColor: "gray"
                        border: '2px solid #9BEC00',
                    }}>
                        <button style={{
                            // position: 'absolute',
                            // top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            zIndex: 1,
                        }} onClick={prevSlide}><FaChevronLeft /></button>

                        {/* <div style={{width:'400px',height:'auto' }}>
            <img style={{ width: "100%", height: '100%', transition: 'transform 0.5s ease-in-out', }}
                src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div> */}

                        <div style={{
                            display: 'flex',
                            transition: 'transform 0.5s ease-in-out',  // Sliding animation effect
                            width: '100%',
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}>
                            {images.map((image, index) => (
                                <div key={index} style={{
                                    minWidth: '100%',
                                    height: '100%',
                                }}>
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '10px',
                                            border:'1px solid black'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <button style={{
                            // position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            zIndex: 1,
                        }} onClick={nextSlide}><FaChevronRight /></button>
                    </div>
                </div>

                <div>
                    <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>Video Demonstraion</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        width: '450px',
                        height: '760px',
                        // margin: 'auto',
                        overflow: 'hidden',
                        borderRadius: '10px',
                        // backgroundColor: "gray"
                        border: '2px solid #9BEC00'

                    }}>
                        <video
                            ref={videoRef}
                            controls
                            src={videoDemo}
                            type="video/mp4"
                            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                        ></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizAppExplore
