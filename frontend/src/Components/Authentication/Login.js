import React, { useState } from 'react'
import { Stack, HStack,Button, VStack, FormControl,Input,FormLabel, InputGroup, InputRightElement } from '@chakra-ui/react'

function Login() {
    const[show,setShow]=useState(false)
    
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const handleclick=()=>setShow(!show)
    const Handlercredential=()=>{}
    const submitHandler=()=>{}
    
    
    
      return (
        <VStack
      spacing='5px'
    >
 
    <FormControl id="email" isRequired color="black">
    <FormLabel>Email</FormLabel>
    <Input placeholder='Enter your email'
    onChange={(e)=>setEmail(e.target.value)}/>
    </FormControl>
    
    
    <FormControl id="password" isRequired color="black">
    <FormLabel>Password</FormLabel>
    <InputGroup>
    <Input 
    type={show?"text":"password"}
    placeholder='Enter your password'
    onChange={(e)=>setPassword(e.target.value)}/>
    <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleclick}>
    {show ? "Hide" :"show"}
        </Button>
    </InputRightElement>
    
    </InputGroup>
    
    </FormControl>
    
     
    
    <Button colorScheme='linkedin' width="100%" style={{marginTop:15}}onClick={submitHandler}>Login</Button>
    <Button colorScheme='pink' width="100%" style={{marginTop:15}}onClick={Handlercredential}>Get Guest User Credentials</Button>
    </VStack>
      )
    }
    

export default Login