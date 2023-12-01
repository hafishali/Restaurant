import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
  return (
    
       <Link style={{textDecoration:"none"}} to={`/restaurantview/${restaurant.id}`}>
            <Card style={{ width: '100%' }}>
          <Card.Img variant="top" height={'300px'} src={restaurant.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-warning'>{restaurant.name}</Card.Title>
            <hr />
            <Card.Text className='d-flex justify-content-between'>
              <p>{restaurant.neighborhood}</p>
              <p>Cuisine:{restaurant.cuisine_type
}</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
       </Link>
  )
}

export default Restcard