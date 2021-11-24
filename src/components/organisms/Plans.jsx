import React from 'react'
import { Box, SimpleGrid, Heading, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#F0F3F6" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Mediacom plans and prices</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="#fff" color="#000" w="100%" mb="-35px" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Access Internet 60</Heading>

        <Flex align="start" color="#3C3E42" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">19</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    In-Home WiFi
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    up to 4 Simultaneous device use
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    200GB^ Usage Allowance
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="#fff" color="#000" w="100%" mb="-35px" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Internet 100</Heading>

        <Flex align="start" color="#3C3E42" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">49</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    In-Home WiFi
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    up to 6 Simultaneous device use
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    1000GB^ Usage Allowance
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="#fff" color="#000" w="100%" mb="-35px" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Internet 1 GIG</Heading>

        <Flex align="start" color="#3C3E42" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">79</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    In-Home WiFi
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    20+ Simultaneous device use
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    6000GB^ Usage Allowance
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default Plans