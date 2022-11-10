import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./home.css"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='homecontainer'>
<div className='serchboxcontainer'>
  <h2 >Search Properties to Rent</h2>
 <input  style ={{height:"50px",width:"40%",border:"1px solid", marginTop:"10px",borderRadius:"15px"}} placeholder='search with search bar'  />

</div>

<div className='filterContainer'>

</div>

        </div>
    </div>
  )
}

export default Home