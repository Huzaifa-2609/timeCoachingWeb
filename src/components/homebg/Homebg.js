import React from 'react'
import {  Carousel } from 'react-bootstrap'

const Homebg = () => {
  return (
    <div>
      <Carousel controls={false} indicators={false} variant="dark"style={{height:"95vh"}} >
      <Carousel.Item>
        <img
          className="d-block opacity-25  w-100"
          src="/assets/home/1.jpg"
          alt="First slide"
          style={{height:"95vh", objectFit:"cover"}}

        />
        {/* Container */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block opacity-25  w-100"
          src="/assets/home/bg.jpg"
          alt="Second slide"
          style={{height:"95vh",objectFit:"cover"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-25"
          src="/assets/home/bg2.jpg"
          alt="Third slide"
          style={{height:"92vh",objectFit:"cover"}}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Homebg
