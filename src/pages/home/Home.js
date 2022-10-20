import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./home.css";
import { Fade } from "react-reveal";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sanityClient from "../../client";
import { Link } from "react-router-dom";
import { courses } from "../../SampleData/courses";
import { review } from "../../SampleData/review";
import Homebg from "../../components/homebg/Homebg";

const Home = () => {
  const [news, setNews] = useState([]);
    useEffect(() => {
      sanityClient
          .fetch(
              `*[_type=="news"]| order(_createdAt asc) {
                _id,
                title,
                "imageUrl":image.asset->url,
                desc
              }`
          )
          .then((data) => {setNews(data)})
          .catch(console.error)

  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
      items: 1,
    },
  };
  return (
    <>
    <Homebg/>
      <Container className="inner-container position-absolute top-0 mt-5 d-flex align-items-center">
        <Row className="">
          <Col md={7}>
            <Card className="w-100" bg="transparent" border="0">
              <Card.Body>
                <Card.Title as={"h4"} className="home-card-title">
                  24 Years of Dedication
                </Card.Title>
                <Card.Text className="home-card-desc fw-bold">
                  Transforming our youth into educated leaders by providing them
                  quality education and character building.
                </Card.Text>
                <Link to="/admissions">
                  <Button variant="outline-primary" size="lg">
                    Enroll now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="newsAndEvents mt-5">
        <Fade left duration={2000}>
          <h3 className="home-subcard-title">News & Events</h3>
        </Fade>
        <Row>
          {news.map((a) => {
            return <NewsCard key={a._id} new={a} />;
          })}
        </Row>
      </Container>
      <Container className="reviews">
        <Fade left duration={2000}>
          <h3 className="home-subcard-title mb-4">Students' Reviews</h3>
        </Fade>
        <Fade bottom duration={2000}>

      <Row>
          {
            review.map((a)=>{
              return(
                <ReviewCard review={a} />
                ) 
              })
            }
      </Row>
          </Fade>
      </Container>
      <Container>
        <Fade left duration={2000}>
          <h3 className="home-subcard-title">Courses We Offer?</h3>
        </Fade>
        <Fade bottom duration={2000}>
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={5000}
            className="mx-auto"
          >
            {courses.map((course) => {
              return (
                <Card
                  key={courses.indexOf(course)}
                  className=" shadow m-auto mt-2"
                  style={{ width: "81%", borderRadius: "14px" }}
                >
                  <Card.Img
                    style={{ borderRadius: "14px" }}
                    variant="top"
                    src={course.img}
                  />
                </Card>
              );
            })}
          </Carousel>
          ;
        </Fade>
      </Container>
    </>
  );
};

export default Home;
