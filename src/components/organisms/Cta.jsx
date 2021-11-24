import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const Cta = () => {
    return (
<>
<Box p="8" bgColor="#3C3E42" color="white" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
            <Text fontWeight="700" fontSize="2xl" >
            Find Mediacom Deals In Your Area:
            </Text>
            </Box>
            <Spacer/>
            <Flex align="center">
                <Input w="80%" focusBorderColor="white" colorScheme="white" borderRadius="md" placeholder="Enter Zip Code" size="lg" variant="filled" mr="3" />
                <Button colorScheme="white" bgGradient="linear(to-r, #FCAF17, #ED1944)" px="40px" size="lg" variant="solid" borderRadius="md">Check Availability</Button>
            </Flex>
        </Flex>
</Box>
</>
    )}


export default Cta