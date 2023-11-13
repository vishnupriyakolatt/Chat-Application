import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chatpage() {
    const [Chats,setChat]=useState([])
    const fetchChats=async()=>{
        const response=await axios.get('/api/chat')

        setChat(response.data)
    }
    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>
    {Chats.map((chat) => (
      <div key={chat._id}>{chat.chatName}</div>
    ))}
  </div>)
}

export default Chatpage