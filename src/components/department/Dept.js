import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Container, Figure } from "react-bootstrap";
import "./dept.css"
import { Fade } from "react-reveal";
import sanityClient from "../../client"
import LoadContext from "../../Context/LoadContext";


const RenderCard=({teacher})=>{
  return(
    <Fade bottom={true} duration={2000}>
    <Figure className="row rounded mx-auto my-5" style={{width:"85%", }}>
      <Figure.Image
        alt="171x180"
        src={teacher.imageUrl||"/assets/home/def1.png" }
        className="col-md-4 rounded-25"
      />
      <div className="col-md-8">
        <h2 className="dept-title ">{teacher.name}<span className="text-muted fs-3 d-inline ">{teacher.hod?"(HOD)":""}</span></h2>
        <Figure.Caption className="dept-subtitle ">
          <h3 className="text-dark fs-3">Qualification:</h3>
          <span className="fs-4">{teacher.qualification}</span>
          {teacher.hod?<> <h3 className="text-dark fs-3">Teaching Since:</h3>
          <span className="fs-4">{new Date(teacher.since).getFullYear()}</span></>:""}
        </Figure.Caption>
      </div>
    </Figure>
    </Fade>

  )
}

const Dept = () => {

  const params = useParams();
  const [teachers, setTeachers] = useState([]);
  const context = useContext(LoadContext);
  const {updateProgress} = context
  useEffect(() => {
    updateProgress(30)
    sanityClient
        .fetch(
            `*[_type=="teachers"]| order(_createdAt asc) {
              _id,
              name,
              "imageUrl":image.asset->url,
              hod,
              qualification,
              "dept":dept->deptname,
              since,
            }`
        )
        .then((data) => {setTeachers(data); updateProgress(70); updateProgress(100)})
        .catch(console.error)
        
}, []);
  return (
    <Container className="department my-4 p-3">
    <h3 className="dept-subcard-title text-muted">Our {params.deptname} Faculty</h3>

    {
      teachers.filter((a)=> a.dept===params.deptname && a.hod).map((teacher)=>{
        return(
          <RenderCard key={teacher._id} teacher={teacher}/>
        )
      })
    }
    {
      teachers.filter((a)=> a.dept===params.deptname && !a.hod).map((teacher)=>{
        return(
          <RenderCard teacher={teacher}/>
        )
      })
    }
    </Container>
  );
};

export default Dept;
