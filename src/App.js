import './App.css';
import { Box, Heading,Button,Grid} from "@chakra-ui/react"
import { RiDivideLine } from "react-icons/ri";
import { HiMinusSm } from "react-icons/hi";
import {  BsBackspace} from "react-icons/bs";
import { useState } from 'react';

function App() {
  const [input1 , setInput1] = useState(0);
  const [input2 , setInput2] = useState('');
  const [input3 , setInput3] = useState('');
  return (
    <div className="App">
    <Box m='auto' background= '#0b06015c' mt={'50px'} w='30%' p={'50px'} borderRadius='20px' border='1px solid black'>
      <Heading  m='auto' w='100%' mb={'20px'} size='xl' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight='extrabold'>REACT CALCULATOR APP</Heading>
      <Heading  m='auto' p={'10px'} w='84%' borderRadius={10} bg={'whiteAlpha.700'}>{input1}{input2}{input3}</Heading>
      <Grid m='auto' p={'20px'} w='95%' gridTemplateColumns={'repeat(3,1fr)'} gap='10px'>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={0} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >C</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={0} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >0</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}}  _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} ><BsBackspace/></Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={1} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >1</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={2} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >2</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={3} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >3</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={4} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >4</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={5} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >5</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={6} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >6</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={7} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >7</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={8} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >8</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={9} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >9</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={"*"} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >x</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={"-"} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} ><HiMinusSm/></Button>
      <Button onClick={(e)=>{setInput2(e.target.value)}} value={"+"} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >+</Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={"/"} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} ><RiDivideLine /></Button>
      <Button onClick={(e)=>{setInput1(e.target.value)}} value={"."} _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} >.</Button>
      <Button   _hover={{bg:'blue.500', border:'1px solid white',color:'white' , fontSize:'2xl'}} fontWeight={'bold'} fontSize={'xl'} colorScheme={'orange'}>=</Button>
      </Grid>
    </Box>
      
    </div>
  );
}

export default App;
