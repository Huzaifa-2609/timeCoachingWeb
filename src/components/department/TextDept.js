import React from 'react'
import { Card } from 'react-bootstrap'
import "./dept.css"

const TextDept = () => {
  return (
    <div>
      <Card className='rounded-3 shadow m-auto' style={{ width: "40rem" }} >
        <div className="d-flex align-items-center px-2">
        <Card.Img className='rounded-circle teach-img me-3' variant="top" src={"/assets/home/6.jpg"} />
        <Card.Title >Card Title</Card.Title>
        </div>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default TextDept
