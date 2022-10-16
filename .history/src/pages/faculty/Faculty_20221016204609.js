import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { faculty } from "../../SampleData/faculty";
import "./faculty.css";

const Faculty = () => {
  const FacultyCard = ({ dept }) => {
    const [reveal, setReveal] = useState(false);
    const mouseOver = () => {
      setReveal(true);
    };
    const mouseLeave = () => {
      setReveal(false);
    };
    return (
      <Col md={4} className="my-5 p-2">
        <Link to={`/faculty/${dept.deptname}`}>
        <Card
          role={"button"}
          onMouseEnter={mouseOver}
          onMouseLeave={mouseLeave}
          className="shadow-lg "
          border="0"
          >
          <Card.Img
            src="/assets/home/urdu.png"
            className="opacity-25"
            alt="Card image"
            />
          <Card.ImgOverlay className="d-flex flex-column justify-content-evenly">
            <Card.Title className="faculty-cardtitle">
              Faculty of {dept.deptname}
            </Card.Title>
            <div >
            <Fade distance={"1rem"} duration={500} left  when={reveal}>
              <Card.Text className="text-muted fw-bold fs-5 mt-4">
                <span className="card-key"> HOD:</span> {dept.hod}
              </Card.Text>
              <Card.Text className="fs-5 fw-bold text-muted">
                <span className="card-key">Total Teachers:</span>{" "}
                {dept.totalTeachers}
              </Card.Text>
            </Fade>
            </div>
          </Card.ImgOverlay>
        </Card>
            </Link>
      </Col>
    );
  };

  return (
    <Container className="faculty my-5 p-2">
      <h3 className="faculty-subcard-title text-muted">Our Qualfied Faculty</h3>
      <Row>
        {faculty.map((a) => {
          return <FacultyCard dept={a} />;
        })}
      </Row>
    </Container>
  );
};

export default Faculty;
