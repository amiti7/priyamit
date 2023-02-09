import React from 'react';
import one from "../Assets/one.jpeg";
import Count from "../components/countdown/Count"

const Home = () => {
  return (
    <div style={{ position:'absolute', width:'100%'}}>
    <div style={{border:'1px solid #83181b', height:'99vh',overflow:'hidden', position:'absolute', borderRadius:'15px'}}>
        <img height="100%" width="100%" src={one} alt="">
        </img>
    </div>
    <div style={{position:'relative', marginTop:'20%'}}>
        <div style={{fontFamily:'cursive', lineHeight:'1',position:'relative', fontSize:'62px', width:'35%', textAlign:'center', transform:'translateY(50%)',margin:'auto', color:'#A8815D'}}> 
        Priya & Amit
        </div>
        <div style={{position:'relative', fontSize:'16px', width:'80%',  textAlign:'center',color:'#83181b', transform:'translateY(350%)',margin:'auto', textTransform:'capitalize'}}> 
        Together with their families invite you to their wedding celebration
        </div>
        <div style={{fontSize:'32px', textAlign:'center', transform:'translateY(400%)', width:'fit-content', margin:'auto',color:'#A8815D' }}>
            on 13th March, 2023
        </div>
        <div style={{fontSize:'22px', textAlign:'center', transform:'translateY(300%)', width:'fit-content', margin:'auto',color:'#A8815D' }}>
            to their Residance at Yashoda Nagar, Kanpur.
        </div>
        <div style={{ transform:'translateY(900%)', textAlign:'center', width:'fit-content', margin:'auto',color:'#83181b'}}>
            Starts in
        </div>
        <div style={{fontSize:'46px', transform:'translateY(350%)', textAlign:'center', width:'fit-content', margin:'auto', color:'#cda2a3'}}>
            <Count/>
        </div>
    </div>
    </div>
  )
}

export default Home