import React from 'react'
import two from "../Assets/two.jpeg";
import maps from "../Assets/maps.png";

const Locations = () => {
    return (
        <div style={{ position:'absolute', width:'100%'}}>
          <div style={{border:'1px solid #83181b', height:'90vh',overflow:'hidden', position:'absolute',top:'40%', borderRadius:'15px'}}>
            <img height="100%" width="100%" src={two} alt="">
            </img>
        </div>
         <div style={{position:'relative', marginTop:'10%', zIndex:2}}>
            <div style={{position:'relative', fontSize:'16px', width:'60%',  textAlign:'center',color:'#83181b', transform:'translateY(600%)',margin:'auto', textTransform:'capitalize'}}> 
            Venue:UDAY MARRIAGE LAWN, Sathigawan.
            
           
            </div>
            <div style={{position:'relative', fontSize:'16px', width:'80%',  textAlign:'center',color:'#83181b', transform:'translateY(650%)',margin:'auto', textTransform:'capitalize'}}> 
            To reach the venue, Click the below google map location : 
           
            </div>
            <div style={{margin:'auto', width:'20%', transform:'translateY(300%)', border:'1px solid green', borderRadius:'15px', padding:'1em'}} onClick={()=>{window.parent.open("https://goo.gl/maps/h4hqtC6K3sux45We9","_new")}}>
                <img width="50px" src={maps} alt=""></img>
            </div>
           
        </div>
        </div>
      )
}

export default Locations