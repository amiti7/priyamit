import React, {useEffect} from 'react';
import Count from "../components/countdown/Count"
import ReactGA from 'react-ga';


const HomeData = () => {
  useEffect(()=>{
    console.log('firing event home')
    ReactGA.event({
      category:'OpenedPage',
      action:'test action',
      label:'test label',
      value:'test value'
    })
  },[])
  return (
    <div style={{zIndex:2, position:'fixed', top:'20%'}}>
            <div style={{color:'#A8815D',lineHeight:'1', fontFamily:'cursive',  fontSize:'52px', margin:'0em auto', width:'30%', textAlign:'center',}} class="block"> Priya & Amit </div>

                    <div style={{color:'#83181b', fontSize:'16px', margin:'0em auto', textTransform:'capitalize', textAlign:'center',}} class="block"> Together with their families invite you to their wedding celebration </div>
                    <div style={{color:'#A8815D', fontSize:'32px', margin:'0.5em auto',  textAlign:'center', width:'fit-content',}} class="block"> on 13th March, 2023 </div>

                    <div style={{color:'#A8815D', fontSize:'22px', margin:'1em auto',  textAlign:'center', width:'fit-content',}} class="block"> to their Residance at Yashoda Nagar, Kanpur. </div>

                            <div style={{color:'#83181b', margin:'1em auto',  textAlign:'center', width:'fit-content',}} class="block"> Starts in </div>

                            <div style={{color:'#83181b',fontSize:'42px',  margin:'0.5em auto',  textAlign:'center', width:'fit-content',}} class="block"> <Count/></div>

    </div>
  )
}

export default HomeData