import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fecthrestaurant } from '../redux/restslice'

function Home() {
  // accessing the state
  const allrestaurant=useSelector((state)=>state.restslice.allrestaurant)
  console.log(allrestaurant);

  const dispacth=useDispatch()


  useEffect(()=>{
    // to update the state by using thunk api call
     dispacth(fecthrestaurant())

  },[])
  return (
    <div>
         <Row className='p-3 my-5'>
           {allrestaurant?.length>0?
           allrestaurant.map((item)=>(<Col sm={6} md={4} className='px-5 py-3'>
           <Restcard restaurant={item}/>
       </Col >))
            
            : <h5 className='text-danger text-center fw-bold'>Nothing to display</h5>
            }
          
        </Row>
    </div>
  )
}

export default Home