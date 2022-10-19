import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import PhotoAlbum from "react-photo-album";
import Carousel from "react-multi-carousel";
import { photos } from '../../SampleData/photos';
import { photos2 } from '../../SampleData/photos2';

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
        const pics1= photos.filter((a)=>photos.indexOf(a)<36);
        const pics2= photos2;
  return (
    <Container className={"my-5"}>
      <h3 className="home-subcard-title mb-4">Cricket Tournament</h3>
     <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={5000}
            className="mx-auto"
          >
          {pics1.map((a)=>{
            return <Card className='mx-3'>
                  <Card.Img src={a.src} alt="" />
              </Card>
          })}
        
    </Carousel>
    <h3 className="home-subcard-title my-4">Annual Excrusion</h3>
    <PhotoAlbum layout="columns" photos={pics2} />
   {/* <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={5000}
            className="mx-auto"
          >
          {pics2.map((a)=>{
            return <Card className='mx-3' style={{width:"18rem"}}>
                  <Card.Img src={a.image} style={{objectFit:"cover"}} alt="" />
              </Card>
          })}
        
    </Carousel> */}
    </Container>
  )
}

export default Gallery
