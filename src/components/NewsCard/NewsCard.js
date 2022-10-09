import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'


const NewsCard = () => {
  return (


    <Col md={4} className="mt-4">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"/assets/home/timelogo.png"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
 
  )
}

export default NewsCard
