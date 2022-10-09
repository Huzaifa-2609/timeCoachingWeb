import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Homebg from "../../components/homebg/Homebg";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./home.css";
import { Fade } from 'react-reveal'
import ReviewCard from "../../components/reviewCard/ReviewCard";

const Home = () => {
  return (
    <>
      {/* <Homebg/> */}
      <Container className="inner-container d-flex align-items-center">
        <Row className="">
          <Col md={7}>
            <Card className="w-100" bg="transparent" border="0" >
              <Card.Body>
                <Card.Title as={"h4"} className="home-card-title text-primary" >26 Years of Dedication</Card.Title>
                <Card.Text className="home-card-desc text-muted fw-bold" >
                IoBM empowers students and faculty to create a revolution with limitless dedication
                </Card.Text>
                <Button variant="outline-primary" size="lg">Fill the Form</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="w-100" bg="transparent" border="0">
              {/* <Card.Img src="/assets/home/timelogo.png" className="logo"/> */}
              {/* <Card.Body>
                <Card.Title as={"h1"}>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body> */}
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="newsAndEvents">
        <Fade left duration={3000}>
        <h3 className="home-subcard-title text-primary">News & Events</h3>
        </Fade>
        <Fade bottom duration={3000}>
        <Row>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
        </Row>
        </Fade>
      </Container>
      <Container className="reviews">
      <Fade left duration={3000}>
        <h3 className="home-subcard-title text-primary">Reviews</h3>
        </Fade>
        <Fade bottom duration={3000} opposite>
          <Row>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </Row>
          </Fade>
      </Container>
    </>
  );
};

export default Home;
