import React from 'react'
import { Container} from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { campus } from '../../SampleData/campussample'
import "./campus.css"


const RenderCard=({item})=>{
  return(
    <Container className='my-5' width={"85%"}>
    <Fade left duration={2000} distance={"2rem"}>
        <h3 className="camp-subcard-title mb-5">{item.name}</h3>
   </Fade>
  <Fade bottom={true} duration={2000}>
    <div className="col-md-8 mt-3">
      <div><span className="camp-card-key fs-3 fw-bold">Address</span>: <span className="card-value text-muted fs-4 ">{item.address}</span></div>
    <span className="camp-card-key fs-3 fw-bold">Contact</span>: <span className="card-value text-muted fs-4 ">{item.contact}</span>
    </div>
  </Fade>
        </Container>
  )
}

const Campuses = () => {
  return (
    <Container className='my-5'>
      <h1 className='about-card-title text-muted my-4'>Our Network</h1>  
      {campus.map((a)=>{
       return (<RenderCard key={campus.indexOf(a)} item={a}/>)
      })}
    </Container>
  )
}

export default Campuses
