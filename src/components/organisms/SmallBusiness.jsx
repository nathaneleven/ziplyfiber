import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const SmallBusiness = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Small Business: Get the job done with reliable, fast and affordable internet</Heading>

    <SimpleGrid columns={{base:"1", md:"2"}} pb="30px" spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <List p="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    No annual contracts 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Everyday low pricing
                </ListItem>
      </List>
      </Flex>
      <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <List p="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Unlimited data
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Run eCommerce or VOIP
                </ListItem>
      </List>
      </Flex>

    </SimpleGrid>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#000050" color="#fff" w="100%" mb="" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 500/500</Heading>

        <Flex align="start" color="#fff" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">100</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Super-fast Fiber speed upload & download 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#000050" color="#fff" w="100%" mb="" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Fiber 100/100</Heading>

        <Flex align="start" color="#fff" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">50</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Fast speeds up to 100 Mbps upload & download 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="2xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#000050" color="#fff" w="100%" mb="" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">Ziply Internet</Heading>

        <Flex align="start" color="#fff" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">50</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Variable download speeds 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid>
      <Text pt="12">For new residential customers. One-time introductory price for the first 12 months. Prices shown with autopay and paperless billing.</Text>
</Box>
</>
    )}

export default SmallBusiness