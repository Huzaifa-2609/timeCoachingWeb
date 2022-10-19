import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'


const NewsCard = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Col md={4} className="mt-4">
      <Fade bottom duration={2000}>
      <Card className='rounded-3 shadow m-auto' style={{ width: '81%' }} >
      <Card.Img variant="top" src={props.new.imageUrl} />
      <Card.Body>
        <Card.Title>{props.new.title}</Card.Title>
        <Card.Text>
        {showMore ? props.new.desc : `${props.new.desc.substring(0, 62)}`}
        <div className='text-primary' onClick={() => setShowMore(!showMore)} role={"button"}>{showMore ? "Show less" : "Show more"}</div>
        </Card.Text>
      </Card.Body>
    </Card>
    </Fade>
    </Col>
 
  )
}

export default NewsCard
