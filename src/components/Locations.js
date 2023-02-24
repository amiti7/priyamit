import React, { useEffect } from 'react'
import two from "../Assets/two.jpeg";
import LocationData from './LocationData';
import ReactGA from 'react-ga';

const Locations = () => {
  useEffect(()=>{
    console.log('firing event')
    ReactGA.event({
      category:'OpenedPage',
      action:'test action',
      label:'test label',
      value:'test value'
    })
  },[])
  return (
    <div style={{ position:'absolute', width:'100%'}}>
    <div style={{border:'1px solid #83181b', height:'90vh',overflow:'hidden', position:'absolute',top:'13%', borderRadius:'15px'}}>
      <img height="100%" width="100%" src={two} alt="">
      </img>
  </div>
   <div style={{position:'relative', marginTop:'80%'}}>
    <LocationData/>
  </div>
  </div>
  )
}

export default Locations