import { Box, Text, Button, VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Slide1 from './components/svg/slideImage1.svg';
import Slide2 from './components/svg/slideImage2.svg';
import Slide3 from './components/svg/slideImage3.svg';
import GoogleIcon from './components/svg/googleIcon.svg';
import AppleIcon from './components/svg/appleIcon.svg'

export default function Home() {
  // const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} minH="100vh">
      <VStack
        align="start"
        justify="center"
        p={8}
        ml={4}
        spacing={4}
        flex={1}
        bg="white"
      >
        <Text color={'#0C0C0C'} fontSize={{md:'4.5rem',base:'2.25rem'}} lineHeight={{md:'86.4px',base:'45px'}} fontWeight="700">
          VIBE
        </Text>
        <Text mb={{md:'2rem',base:'0.5rem'}} color={'#000000'} fontSize={{md:'1.25rem',base:'0.85rem'}} lineHeight={'24px'} fontWeight="600">
          Product Discovery, Elevated
        </Text>
      <VStack maxW={{md:'60%'}} gap={{md:'1.2rem'}} my={{md:'2rem',base:'1rem'}} textAlign={'left'} display={'flex'} alignItems={'flex-start'}>
      <Text color={'#596168'} fontWeight={'400'} lineHeight={'21.6px'} fontSize={{md:'18px',base:'0.85rem'}}>
          <span style={{fontWeight:'700'}}>Hushh Labs </span>is revolutionizing online shopping with a <span style={{fontWeight:'700'}}>powerful search engine that understands you.</span>
        </Text>
        <Text color={'#596168'} fontWeight={'400'} lineHeight={'21.6px'} fontSize={{md:'18px',base:'0.85rem'}}>
          By decoding <span style={{fontWeight:'700'}}> natural language, we're personalizing your product discovery journey.</span>
        </Text>
        <Text color={'#596168'} fontWeight={'400'} lineHeight={'21.6px'} fontSize={{md:'18px',base:'0.85rem'}}>
          Launch is just around the corner - be among the first to experience smarter shopping.
        </Text>
        <Text color={'#596168'} fontWeight={'400'} lineHeight={'21.6px'} fontSize={{md:'18px',base:'0.85rem'}}>
        <span style={{fontWeight:'700'}}>Sign up now </span>for early access and exclusive updates.
        </Text>
      </VStack>
       
        <VStack spacing={4}>
          <Button textAlign={'left'} justifyContent={'flex-start'} gap={{md:'1rem',base:'0.5rem'}} color={'#0000008A'} bg={'#FFFFFF'} fontWeight={'500'} fontSize={{md:'1.25rem',base:'1rem'}} p={'0.6rem'} w={{md:'20rem',base:'10rem'}} borderRadius={'10px'} boxShadow =' 0px 2px 3px 0px #0000002B'>
            <Image src={GoogleIcon} alt="Google Sign Up" /> Sign Up with Google
          </Button>
          <Button textAlign={'left'} justifyContent={'flex-start'} gap={{md:'1rem',base:'0.5rem'}} color={'#FFFFFF'} bg={'#000000'} fontWeight={'500'} fontSize={{md:'1.25rem',base:'1rem'}} p={'0.6rem'} w={{md:'20rem',base:'10rem'}} borderRadius={'10px'} boxShadow =' 0px 2px 3px 0px #0000002B'>
            <Image src={AppleIcon} alt="Sign Up with Apple" />
            Sign Up with Apple 
          </Button>
        </VStack>
      </VStack>

      <Box
        flex={1}
        bg="#C7DAE9"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        flexDirection={'column'}
        gap={{md:'2rem',base:'1rem'}}
      >
        <Image
          src={Slide1}
          alt="Maze illustration"
          boxSize="80%"
          objectFit="contain"
          style={{zIndex:'1'}}
        />
        <Text
          // position="absolute"
          bottom={4}
          fontSize={{md:'2rem',base:'1.15rem'}}
          fontWeight="700"
          textAlign="center"
          zIndex={'2'}
          lineHeight={{md:'41.6px',base:'35px'}}
          letterSpacing={'-1%'}
          fontFamily={'Figtree'}
          mx={{md:'4rem',base:'0.5rem'}}
          mt={{md:'3rem',base:'0.5rem'}}
        >
          Shop Smoothly, <br></br> Save the Maze for Game Night
        </Text>
      </Box>
    </Box>
  );
}