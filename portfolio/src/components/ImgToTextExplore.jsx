import React, { useRef, useState } from 'react'
import img1 from '../image/image-to-text/img1.jpg'
import img2 from '../image/image-to-text/img2.jpg'
import img3 from '../image/image-to-text/img3.jpg'
import img4 from '../image/image-to-text/img4.jpg'

import videoDemo from '../videos/videoDemo.mp4'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const images = [img1, img2, img3, img4]

const ImgToTextExplore = () => {
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
                    <h2 style={{textAlign:'center',color:'white',marginBottom:'20px'}}>Images</h2>
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
                <h2 style={{textAlign:'center',color:'white',marginBottom:'20px'}}>Video Demonstration</h2>
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

export default ImgToTextExplore
