import React from 'react';
import one from "../Assets/one.jpeg";
import HomeData from './HomeData';

const Home = () => {
  return (
    <div style={{ position:'absolute', width:'100%'}}>
    <div style={{border:'1px solid #83181b', height:'90vh',overflow:'hidden', position:'absolute',top:'15%', borderRadius:'15px'}}>
        <img height="100%" width="100%" src={one} alt="">
        </img>
    </div>
    <div style={{position:'relative', marginTop:'20%'}}>
        <HomeData/>
    </div>
    </div>
  )
}

export default Home