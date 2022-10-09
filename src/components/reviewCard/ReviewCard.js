import React from 'react'
import { Card, Col } from 'react-bootstrap'

const ReviewCard = () => {
  return (
    <Col md={4} className="mt-4">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* ~<Card.Title>Car</Card.Title> */}
        <Card.Title className="mb-2 fs-4">~ Huzaifa</Card.Title>
        <Card.Text className='text-muted'>
          ....Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default ReviewCard
