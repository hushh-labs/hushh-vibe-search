'use client'
import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Input, Button, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import styles from './Search.module.css';
import Header from '../components/header';

const Search = () => {
  const [query, setQuery] = useState('');
  const [userImage, setUserImage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      console.log('Search Result:', response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };


  useEffect(() => {
    // Simulate fetching user data from session
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/session');
        setUserImage(response.data.imageUrl);
      } catch (error) {
        console.error('Error fetching user session:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
    <Header/>
        <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      backgroundColor="#FFFFFF"
      className={styles.vibeContainer}
    >
      <Text fontSize="4xl" fontWeight="bold" marginBottom="4">
        VIBE
      </Text>
      <Box
        width={{ base: '90%', md: '60%', lg: '40%' }}
        padding={{ base: '2', md: '4' }}
        boxShadow="lg"
        backgroundColor="white"
        borderRadius="md"
      >
        <Flex alignItems="center">
          <Input
            placeholder="Search for fashion..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            borderRadius="full"
            flexGrow={1}
            border="none"
            _focus={{ outline: 'none', boxShadow: 'none' }}
          />
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            onClick={handleSearch}
            backgroundColor="purple.500"
            color="white"
            marginLeft="2"
            _hover={{ backgroundColor: 'purple.600' }}
            borderRadius="full"
          />
        </Flex>
        <Flex marginTop="4" justifyContent="space-between">
          <Button variant="outline" size="sm" onClick={() => {}}>
            Past Searches
          </Button>
          <Button variant="outline" size="sm" onClick={() => {}}>
            Fashion Dice Roll
          </Button>
        </Flex>
      </Box>
      <Box position="absolute" bottom="4" left="4">
        <Text>hushh Labs, 2024</Text>
      </Box>
      <Flex position="absolute" bottom="4" right="4">
        <Button variant="link" marginRight="4">
          About
        </Button>
        <Button variant="link">Business</Button>
        <Button variant="link" marginLeft="4">
          Privacy
        </Button>
        <Button variant="link" marginLeft="4">
          Terms
        </Button>
      </Flex>
    </Flex>
    </>
  
  );
};

export default Search;