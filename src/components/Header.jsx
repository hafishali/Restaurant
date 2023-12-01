import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/restslice'
import logo from '../logo/th-removebg-preview.png'

function Header() {
  const dispatch=useDispatch()
  return (
   <>
   <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img height={'50px'} src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#"><h2 className='fw-bold'>RESTO<span style={{color:'red'}}> HUB</span></h2>
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
       
      </ul>
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='search by neighborhood ' className='form-control  text-light w-25'   />
      {/* <button   className='btn btn-warning ms-2'>Search</button> */}
    </div>
  </div>
</nav>
   </>
        
  )
}

export default Header