import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'

const ReviewCard = () => {
  return (
    <Col md={4} className="mt-4">
      <Fade bottom duration={2000}>
      <Card style={{ width: '81%' }} className="shadow m-auto">
      <Card.Body>
        {/* ~<Card.Title>Car</Card.Title> */}
        <Card.Title className="mb-2 fs-4">~ Huzaifa</Card.Title>
        <Card.Text className='text-muted'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Fade>
    </Col>
  )
}

export default ReviewCard
