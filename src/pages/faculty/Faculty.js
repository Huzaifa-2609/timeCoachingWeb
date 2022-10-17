import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./faculty.css";
import sanityClient from "../../client"
import LoadContext from "../../Context/LoadContext";

const FacultyCard = ({ dept }) => {
  const [reveal, setReveal] = useState(false);
  const mouseOver = () => {
    setReveal(true);
  };
  const mouseLeave = () => {
    setReveal(false);
  };
  return (
    <Col md={4} className="my-2 p-2">
      <Link to={`/faculty/${dept.deptname}`}>
      <Card
        role={"button"}
        onMouseEnter={mouseOver}
        onMouseLeave={mouseLeave}
        className="shadow-lg "
        border="0"
        style={{minHeight:"260px" }}
        >
        <Card.Img
          src={dept.imageUrl}
          className="opacity-25"
          alt="Card image"
          />
        <Card.ImgOverlay className="d-flex flex-column justify-content-evenly">
          <Card.Title className="faculty-cardtitle">
            Faculty of {dept.deptname}
          </Card.Title>
          <div >
          <Fade distance={"1rem"} duration={500} left  when={reveal}>
            <Card.Text className="text-muted h-50 mt-4">
              <span className="card-key fs-5 fw-bold"> HOD:</span><span className="fs-5 fw-bold"> {dept.hod}</span>
            </Card.Text>
          </Fade>
          </div>
        </Card.ImgOverlay>
      </Card>
          </Link>
    </Col>
  );
};
const Faculty = () => {

  const context = useContext(LoadContext)
  const {updateProgress}= context;
  const [dept, setDept] = useState([]);
  useEffect(() => {
    updateProgress(50)
    sanityClient
        .fetch(
            `*[_type=="depart"] {
              deptname,
              "imageUrl":bannerimage.asset->url,
              "hod":hod->name,
            }`
        )
        .then((data) => {setDept(data) ; updateProgress(70); updateProgress(100);})
        .catch(console.error)
        
}, []);
  return (
    <Container className="faculty my-5 px-3">
      <h3 className="faculty-subcard-title text-muted">Our Qualified Faculty</h3>
      <Row>
        {dept.length!==0 && dept.map((a) => {
          return <FacultyCard dept={a} />;
        })}
      </Row>
    </Container>
  );
};

export default Faculty;
