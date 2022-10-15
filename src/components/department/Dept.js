import React from "react";
import { useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Col, Container, Figure } from "react-bootstrap";
import "./dept.css"
import { Fade } from "react-reveal";
import { deptFaculty } from "../../SampleData/deptsample";


const RenderCard=({teacher})=>{
  return(
  <Fade bottom={true} duration={2000}>
  <Figure className="row rounded mx-auto  my-5" style={{width:"85%" }}>
    <Figure.Image
      alt="171x180"
      src="/assets/home/6.jpg"
      className="col-md-4 rounded-25"
    />
    <Col md={8}>
      <h2 className="dept-title mb-2">{teacher.name}</h2>
      <Figure.Caption className="dept-subtitle mt-5 ">
        <h2 className="fw-bold mt-3">Qualification: </h2>
        <span className="teacher-about mb-0">{teacher.qual}</span>
      </Figure.Caption>
    </Col>
  </Figure>
  </Fade>

  )
}

const Dept = () => {

  const params = useParams();
  return (
    <Container className="my-4 p-3">
    <h3 className="dept-subcard-title text-muted">Our {params.deptname} Faculty</h3>
    {
      deptFaculty.filter((a)=> a.dept===params.deptname).map((teacher)=>{
        return(
          <RenderCard teacher={teacher}/>
        )
      })
    }
    </Container>
  );
};

export default Dept;
