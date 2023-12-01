import React from 'react'

function Footer() {
  return (
    <div>
        <div className='w-100 bg-dark'>
        <div className='d-flex justify-content-between  '>
            <div className='w-50 mt-3'>
                <h1 className='text-light'> RESTO HUB</h1>
                <p style={{textAlign:'justify'}} className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odio sed quaerat debitis eum, in quis maiores quam omnis vitae delectus aut cumque molestiae similique neque architecto itaque assumenda. Recusandae.</p>
            </div>
            <div className='w-50 ms-5 mt-3 '>
                <h3 className='text-light ms-3'>follow us on</h3>
                <a style={{fontSize:'20px'}} className='ms-3' href=""><i  class="fa-brands fa-2x    fa-instagram " style={{color:'white'}}></i></a>
                    <a style={{fontSize:'20px'}} className='ms-3' href=""><i  class="fa-brands fa-2x   fa-twitter " style={{color:'white'}}></i></a>
                    <a style={{fontSize:'20px'}} className='ms-3' href=""><i  class="fa-brands fa-2x    fa-facebook " style={{color:'white'}}></i></a>
                    <a style={{fontSize:'20px'}} className='ms-3' href=""><i  class="fa-brands fa-2x   fa-youtube " style={{color:'white'}}></i></a>
                    <a style={{fontSize:'20px'}} className='ms-3' href=""><i  class="fa-brands fa-2x   fa-tiktok  " style={{color:'white'}}></i></a>
                    <a style={{fontSize:'20px'}} className='ms-3' href=""><i  class="fa-brands fa-2x   fa-snapchat " style={{color:'white'}}></i></a>


            </div>
        </div>
        <div className='w-50  ' style={{float:'right'}}>
        <button  type="button" style={{marginLeft:'2.5rem'}} class="btn btn-warning">Suscribe</button>

        </div>
        <div className='d-flex justify-content-center text-light mt-5 '>
            <p className='mt-3'>this page was created by <a style={{textDecoration:'none',color:'red'}} href="">Hafish</a> </p>
        </div>
    </div>
    </div>
  )
}

export default Footer