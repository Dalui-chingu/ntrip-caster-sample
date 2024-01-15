import React from 'react'
import Admin from '../components/Table/Table';
import Navbar from '../components/NavBar/Navbar'
// import MapView from '../components/BasestationMap/Mapview'
import User from '../components/User/User';



export default function Dashboard() {
  return (
    <div style={{marginTop:'150px',minWidth:'100%'}} >
        <Navbar/>
        <h3 style={{textAlign:'center',marginBottom:'20px',color:'darkblue',textTransform:'uppercase'}}>Base Station</h3>
        <Admin/>
        {/* <MapView/> */}
        <div style={{marginTop:'50px'}}></div>
        <User/>
        <div style={{marginTop:'50px'}}></div>
    </div>
  )
}