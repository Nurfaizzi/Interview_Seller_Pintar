import React from 'react'
import Navbar from '../Components/Navbar'
import Footers from "../Components/Footers"
import Listarticle from "../Components/Listarticle"
const LandingPage = () => {
  return (
        <div className='bg-blue-600  bg-cover max-w-screen '>
          <div className='bg-white bg-cover '>
         <Navbar />
         <Listarticle />
          <Footers /> 
          </div>
      
         </div>
  )
}

export default LandingPage