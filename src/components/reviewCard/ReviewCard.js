import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import "./review.css"

const ReviewCard = ({review}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Col md={4} >
      <Fade bottom duration={2000}>
      <Card style={{ width: '81%' }} className="shadow m-auto mt-4">
      <Card.Body className="review-card-body">
        <Card.Title className="mb-2 fs-4">{review.name}</Card.Title>
        <Card.Text className='text-muted'>
         <cite>
         {showMore ? review.review : `${review.review.substring(0, 62)}`}
        <div className='text-primary' onClick={() => setShowMore(!showMore)} role={"button"}>{showMore ? "Show less" : "Show more"}</div>
          </cite>
        </Card.Text>
      </Card.Body>
    </Card>
      </Fade>
    </Col>
  )
}

export default ReviewCard
