import React from 'react'
import { Flex, Box, Heading, Text, List, ListIcon, ListItem, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'

const About = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#009300" mb="24px">
                    About Ziply Fiber
                    </Heading>
                        <Text>
                        In May 2020, Ziply Fiber acquired the Northwest operations of Frontier Communications as a move to: 
                        </Text>
                        <List py="10px" color="#000000" spacing={2}>
                            <ListItem>
                                <ListIcon as={CheckIcon}  />
                                Make improvements that benefit customers
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} />
                                Deliver a best-in-class fiber network 
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} />
                                Provide a refreshingly great customer experience 
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} />
                                Bring fiber to more than one million Northwest homes and businesses
                            </ListItem>
                        </List>
                        <Text>
                        By using the fastest technology available, the company bringing faster speeds and higher performance to communities across Washington, Oregon, Idaho and Montana.
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/about-ziply-fiber-image.jpg" alt="About Image Ziply Fiber" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About