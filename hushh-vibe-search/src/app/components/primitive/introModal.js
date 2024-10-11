'use client'
import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, Circle, Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import Image from "next/image";
import Slide1 from '../svg/slideImage1.svg';
import Slide2 from '../svg/slideImage2.svg';
import Slide3 from '../svg/slideImage3.svg';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { image: Slide1, text: "Shop Smoothly,",text2:"Save the Maze for Game Night" },
  { image: Slide2, text: "Type like you talk,",text2:" Vibe gets it" },
  { image: Slide3, text: "Spot a style you love?" , text2:"Let's find its twin"},
];

function IntroModal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Show modal after 1 second

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5 seconds delay for slide change

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
    <div className='modal-container'>
      <ModalOverlay />
      <Box
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        zIndex="10"
        bg="#C7DAE9"
        p={6}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        textAlign={'center'}
        maxW="940px"
        maxH={'540px'}
        borderRadius="md"
        boxShadow="lg"
      >
        <ModalCloseButton />
        <Box
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={4}
        display={'flex'}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={slides[currentSlide].image}
                alt="Slide illustration"
                width="441px"
                height="217px"
                style={{ zIndex: '1', alignItems: 'center', justifyContent: 'center' , width:'441px !important',height:'217px !important'}}
              />
           
          <Text
            fontSize={{ md: '2rem', base: '1.15rem' }}
            fontWeight="700"
            textAlign="center"
            zIndex="2"
            lineHeight={{ md: '41.6px', base: '35px' }}
            letterSpacing="-1%"
            fontFamily="Figtree"
            // mx={{ md: '10rem', base: '0.5rem' }}
            mt={{ md: '3rem', base: '0.5rem' }}
          >
            {slides[currentSlide].text}
          </Text>
          <Text
        fontSize={{ md: '2rem', base: '1.15rem' }}
        fontWeight="700"
        textAlign="center"
        zIndex="2"
        lineHeight={{ md: '41.6px', base: '35px' }}
        letterSpacing="-1%"
        fontFamily="Figtree"
        // mx={{ md: '70%', base: '0.5rem' }}
        // mt={{ md: '3rem', base: '0.5rem' }}
      >
        {slides[currentSlide].text2}
      </Text>
          </motion.div>
          </AnimatePresence>
          <HStack spacing={4} mt={4}>
            {slides.map((_, index) => (
              <Circle
                key={index}
                size="10px"
                bg={currentSlide === index ? "#1E1E48" : "#BBBBCA"}
                onClick={() => handleSlideChange(index)}
                cursor="pointer"
              />
            ))}
          </HStack>
        </Box>
      </Box>
      </div>  
    </Modal>
  );
}

export default IntroModal;