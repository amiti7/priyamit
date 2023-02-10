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
         <div style={{position:'relative', marginTop:'34%', zIndex:2}}>
            <div style={{position:'relative', fontSize:'16px', width:'80%',  textAlign:'center',color:'#83181b', transform:'translateY(550%)',margin:'auto', textTransform:'capitalize'}}> 
            How to react Amit : 
           
            </div>
            <div style={{ transform:'translateY(550%)'}} onClick={()=>{window.parent.open("https://goo.gl/maps/rYCDmysnAMuWGtkS8","_new")}}>
                <img width="50px" src={maps}></img>
            </div>
           
        </div>
        </div>
      )
}

export default Locations