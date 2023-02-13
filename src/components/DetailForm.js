import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {toast} from 'react-toastify';

const DetailForm = () => {
  const [name, setName] = useState('');
  const [ message, setMessage]  =useState('')
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

const sendMessage = async() => {
  const data = {
    "source": name,
    "data": {"message":message},
  };

  const postdata = {data}

  try{
  const response = await axios.post(`https://api.steeleasy.in/api/trip-updates`,
  postdata,
  {
    headers: { 
      'Content-Type': 'application/json'
    },
  }
  );
  if(response){
    toast.success('Response saved')
    return true
  }
}catch(exc){
  toast.error('Response failed to saved')
  return false;
}
}

  return (
    <div style={{justifyContent:'center', display:'grid'}} >
      <div className="mb-2">
        <div className="mr-1">
       <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        </div>
      <textarea onChange={(e)=>setName(e.target.value)} id="name" rows="1" class="block ml-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name"></textarea>
      </div>
      <br></br>
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <br></br>
      <textarea onChange={(e)=>setMessage(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

      <div style={{right:"35%"}}>
        <Button onClick={sendMessage}  >Send</Button>
      </div>
    </div>
  )
}

export default DetailForm