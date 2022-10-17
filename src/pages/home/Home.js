import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./home.css";
import { Fade } from 'react-reveal'
import ReviewCard from "../../components/reviewCard/ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      {/* <Homebg/> */}
      <Container className="inner-container d-flex align-items-center">
        <Row className="">
          <Col md={7}>
            <Card className="w-100" bg="transparent" border="0" >
              <Card.Body>
                <Card.Title as={"h4"} className="home-card-title" >26 Years of Dedication</Card.Title>
                <Card.Text className="home-card-desc text-muted fw-bold" >
                IoBM empowers students and faculty to create a revolution with limitless dedication
                </Card.Text>
                <Button variant="outline-primary" size="lg">Fill the Form</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="newsAndEvents">
        <Fade left duration={2000}>
        <h3 className="home-subcard-title">News & Events</h3>
        </Fade>
        <Row>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
        </Row>
      </Container>
      <Container className="reviews">
      <Fade left duration={2000}>
        <h3 className="home-subcard-title">Students' Reviews</h3>
        </Fade>
          <Row>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </Row>
      </Container>
      <Container>
      <Fade left duration={2000}>
        <h3 className="home-subcard-title">Courses We Offer?</h3>
        </Fade>
        <Fade bottom duration={2000}>
        <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000} className="mx-auto">
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card> 
        <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
        </Card>  
    </Carousel>;
    </Fade>
      </Container>
    </>
  );
};

export default Home;
