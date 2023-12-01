import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Restreview({reviews}) {
  const [open, setOpen] = useState(false);
  console.log(reviews);
  return (
    <>
      <Button className='btn btn-warning ms-3 '
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to view reviews 
      </Button>
        <Collapse in={open}>
        <div id="example-collapse-text" className='mt-5'>
          {
            reviews?.map((item)=>(<>
            <hr />
          <h6>name:{item.name}  -date:{item.date}</h6>
          <p>rating:{item.rating}</p>
          <p>{item.comments}</p></>))
         
          
          }
        </div>
      </Collapse>
    </>
  )
}

export default Restreview