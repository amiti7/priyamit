import React, { useEffect, useState, useRef } from 'react'
import video from '../Assets/ganesh.mp4';
import videoLoop from '../Assets/ganeshLoop.mp4';
import styled from "styled-components";


const Welcome = () => {
    const [vidIndex, setVidIndex] = useState(0);
    const [opacity, setOpacity] = useState(100)
    const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  const theme = {
    blue: {
      default: "#000000",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };
  const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: #FFD700;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};
  return (
    <div style={{position:'relative', height:'100vh', background:'black', opacity:`${opacity}%`, transition:"opacity 2s"}}>
        <video
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={video}
        width="100%" height="100%"
        autoPlay
        
        onEnded={() => setVidIndex((idx) => idx + 1)}
        muted="muted"
      />

     <video
        style={{ display: vidIndex === 0 ? "none" : "block" }}
         loop  width="100%" height="100%"
        ref={ref}
        muted="muted"
        >
      <source src={videoLoop} type="video/mp4"/>
     </video>
     <div style={{bottom:'20%',position:'absolute',  right:"35%"}}>
        <Button onClick={()=>{setOpacity(0)}}>Continue</Button>
      </div>
    </div>
  )
}

export default Welcome