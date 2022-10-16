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
    <Figure className="row rounded mx-auto my-5" style={{width:"85%", }}>
      <Figure.Image
        alt="171x180"
        src={teacher.image}
        className="col-md-4 rounded-25"
      />
      <div className="col-md-8">
        <h2 className="dept-title">{teacher.name}</h2>
        <Figure.Caption className="dept-subtitle ">
          {teacher.desc}
        </Figure.Caption>
      </div>
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
