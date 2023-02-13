import React from 'react'
import two from "../Assets/four.jpeg";
import DetailForm from './DetailForm';

const RSVP = () => {
    return (
        <div style={{ position:'absolute', width:'100%'}}>
          <div style={{border:'1px solid #83181b', height:'90vh',overflow:'hidden', position:'absolute',top:'13%', borderRadius:'15px'}}>
            <img height="100%" width="100%" src={two} alt="">
            </img>
        </div>
         <div style={{position:'relative', marginTop:'80%'}}>
          <DetailForm/>
        </div>
        </div>
      )
}

export default RSVP