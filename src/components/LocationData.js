
import React from 'react';
import maps from "../Assets/maps.png";

const LocationData = () => {
  return (
    <div style={{justifyContent:'center', display:'grid'}} >
    <div className="mb-2">
      <div className="mr-1">
        <div  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{color:'#83181b', margin:'0em auto',  width:'60%',}}>Venue:UDAY MARRIAGE LAWN, Sathigawan.</div>
      </div>
    </div>
    <br></br>
    <div style={{color:'#83181b', width:'60%',  margin:'0em auto'}} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To reach the venue, Click the below google map location : </div>

    <div style={{right:"35%"}}>
    <div style={{margin:'2em auto', width:'20%', border:'1px solid green', borderRadius:'15px', padding:'1em'}} onClick={()=>{window.parent.open("https://goo.gl/maps/h4hqtC6K3sux45We9","_new")}}>
                <img width="50px" src={maps} alt=""></img>
            </div>    </div>
  </div>
  )
}

export default LocationData