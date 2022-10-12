import React from 'react'
import { Container, Figure } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { campus } from '../../SampleData/campussample'
import {ImLocation} from "react-icons/im"
import "./campus.css"


const RenderCard=({item})=>{
  return(
  <Fade bottom={true} duration={2000}>
  <Figure className="row rounded mx-auto my-5" style={{width:"85%"}}>
    <Figure.Image
      alt="171x180"
      src={item.image}
      className="col-md-4 rounded-25"
    />
    <div className="col-md-8 mt-3">
      <h2 className="camp-title"><span className="card-key">Campus# </span><span className='text-muted'>{item.name}</span></h2>
      <Figure.Caption className="camp-subtitle">
      <span className="card-key"><ImLocation/> </span> {item.address}
      </Figure.Caption>
    </div>
  </Figure>
  </Fade>
  )
}

const Campuses = () => {
  return (
    <Container>
      {campus.map((a)=>{
       return (<RenderCard key={campus.indexOf(a)} item={a}/>)
      })}
    </Container>
  )
}

export default Campuses
