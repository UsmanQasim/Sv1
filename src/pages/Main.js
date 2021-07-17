import React, { useState } from 'react'
import style from '../pages/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../GalleryPhotos/Anarkali-Chat-1.jpg"
import img2 from "../GalleryPhotos/garden-room-at-syon-park.jpg"
import img3 from "../GalleryPhotos/The-Walled-Garden-At-Syon.jpg"

const Main = () => {

    return (
        <>
            <div>
                <div className={style.coursal_container}>
                    <Carousel className="carousel-style">
                        <Carousel.Item className="slider-item-div">
                                <img
                                    className={style.images}
                                    src={img2}
                                    alt="First slide"
                                />
                            <Carousel.Caption className={style.coursal_text}>
                                <p className={style.text}>Last Minute Catering & Events</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slider-item-div">
                            <img
                                className={style.images}
                                src={img1}
                                alt="Second slide"
                            />
                            <Carousel.Caption className={style.coursal_text}>
                                <p className={style.text}>Last Minute Catering & Events</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slider-item-div">
                            <img
                                className={style.images}
                                src={img3}
                                alt="Third slide"
                            />

                            <Carousel.Caption className={style.coursal_text}>
                                <p className={style.text}>Last Minute Catering & Events</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={style.pakistanwed_section}>
                    <h2 style={{ textAlign: 'center' }}>Section 3</h2>
                </div>
            </div>
        </>

    )
}

export default Main
