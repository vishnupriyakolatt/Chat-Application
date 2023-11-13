import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { Stack, HStack,Button, VStack, FormControl,Input,FormLabel, InputGroup, InputRightElement } from '@chakra-ui/react'
function Signup() {
    const[show,setShow]=useState(false)
const [name,setName]=useState()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const [confirmpassword,setConfirmpassword]=useState()
const [pic,setPic]=useState()
const [loading,setLoading]=useState()
const toast = useToast()
const handleclick=()=>setShow(!show)
const postDetails=(pics)=>{
  setLoading(true);
  if(pic===undefined){
    toast({
      title: 'upload image.',
      description: "We've created your account for you.",
      status: 'warning',
      duration: 9000,
      isClosable: true,
      position:"bottom"
    })
    return
  }
  if(pics.type==="image/jpeg"||pics.type==="image/png"){
    const data=new FormData()
    data.append("file",pics);
    data.append("upload_preset","ChatApp")
    data.append("cloud_name","de8j43bvd")
    fetch("https://api.cloudinary.com/v1_1/de8j43bvd",{
      method:"post",
      body:data,

    }).then((res)=>res.json()).then((data)=>{setPic(data.url.toString())
    setLoading(false)
  });
}else{
  toast({
    title: 'please select an image.',
    description: "We've created your account for you.",
    status: 'warning',
    duration: 9000,
    isClosable: true,
    position:"bottom"
  })
}
}
const submitHandler=()=>{
setLoading(true)
}


  return (
    <VStack
  spacing='5px'
>
<FormControl id="first-name" isRequired color="black">
    <FormLabel>Name</FormLabel>
    <Input
    placeholder='Enter your Name'
    onChange={(e)=>setName(e.target.value)}
    />
</FormControl>
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
<FormControl id="confirmpassword" isRequired color="black">
<FormLabel>Confirm Password</FormLabel>
<Input placeholder='Enter your confirm password'
onChange={(e)=>setConfirmpassword(e.target.value)}/>
</FormControl>
 
<FormControl id="pic">
<FormLabel>Upload your picture</FormLabel>
<Input type="file"
p={1.5}
accept="image/" onChange={(e)=>postDetails(e.target.files[0])}/>
</FormControl>
<Button colorScheme='linkedin' width="100%" style={{marginTop:15}}onClick={submitHandler}
isLoading={loading}>sign up</Button>
</VStack>
  )
}

export default Signup