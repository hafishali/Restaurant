import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Restreview from '../components/Restreview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Restview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const {id}=useParams()
console.log(id);
const restaurant=useSelector((state)=>state.restslice.allrestaurant)
console.log(restaurant);

const selectedrestaurant=restaurant.find((item)=>item.id==id)
console.log(selectedrestaurant);



  return (
    <div className='container'>
      <Row className='my-5'>
        <Col md={4}>
          <img height={'500px'} width={'100%'} src={selectedrestaurant.photograph} alt="" />
        </Col>
        <Col md={6}>
          <div className='w-100'>
            <hr />
            <h3 className='text-center'><span className='text-warning '>RESTAURANT</span> DETAILS</h3>
            <hr />
            <div className='w-100 border border-dark rounded'>
              <ListGroup>
                <ListGroup.Item className='text-center mt-3'><h3>{selectedrestaurant.name}</h3></ListGroup.Item>
                <ListGroup.Item>Neighbourhood:{selectedrestaurant.neighborhood}</ListGroup.Item>
                <ListGroup.Item>Cuisine type:{selectedrestaurant.cuisine_type}</ListGroup.Item>
                <ListGroup.Item>Address:{selectedrestaurant.address}</ListGroup.Item>
                <ListGroup.Item className=' text-center p-4'> <Button variant="warning" onClick={handleShow}>Operating hours</Button>{' '}
                  <Restreview reviews={selectedrestaurant.reviews} />
                </ListGroup.Item>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Operating hours</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ListGroup>
                      <ListGroup.Item>Monday:{selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                      <ListGroup.Item>Tuesday:{selectedrestaurant.operating_hours.Tuesday}</ListGroup.Item>
                      <ListGroup.Item>Wednesday:{selectedrestaurant.operating_hours.Wednesday}</ListGroup.Item>
                      <ListGroup.Item>Thursday:{selectedrestaurant.operating_hours.Thursday}</ListGroup.Item>
                      <ListGroup.Item>Friday:{selectedrestaurant.operating_hours.Friday}</ListGroup.Item>
                      <ListGroup.Item>Saturday:{selectedrestaurant.operating_hours.Saturday}</ListGroup.Item>
                      <ListGroup.Item>Sunday:{selectedrestaurant.operating_hours.Sunday}</ListGroup.Item>
                    </ListGroup>
                  </Modal.Body>

                </Modal>

              </ListGroup>

            </div>

          </div>
        </Col>
      </Row>



    </div>
  )
}

export default Restview