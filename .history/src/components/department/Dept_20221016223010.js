import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Container, Figure } from "react-bootstrap";
import "./dept.css"
import { Fade } from "react-reveal";
import sanityClient from "../../client"


const RenderCard=({teacher})=>{
  return(
    <Fade bottom={true} duration={2000}>
    <Figure className="row rounded mx-auto my-5" style={{width:"85%", }}>
      <Figure.Image
        alt="171x180"
        src={teacher.imageUrl}
        className="col-md-4 rounded-25"
      />
      <div className="col-md-8">
        <h2 className="dept-title">{teacher.name}</h2>
        <Figure.Caption className="dept-subtitle ">
          <h3 className="text-muted">Qualification:</h3>
          {teacher.qualification}
        </Figure.Caption>
      </div>
    </Figure>
    </Fade>

  )
}

const Dept = () => {

  const params = useParams();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    sanityClient
        .fetch(
            `*[_type=="teachers"] {
              name,
              "imageUrl":image.asset->url,
              hod,
              qualification,
              "dept":dept->deptname,
              since,
            }`
        )
        .then((data) => {setTeachers(data)})
        .catch(console.error)
}, []);
  return (
    <Container className="my-4 p-3">
    <h3 className="dept-subcard-title text-muted">Our {params.deptname} Faculty</h3>
    {
      teachers.filter((a)=> a.dept===params.deptname).map((teacher)=>{
        return(
          <RenderCard teacher={teacher}/>
        )
      })
    }
    </Container>
  );
};

export default Dept;
