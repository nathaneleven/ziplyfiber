import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
const About = () => {
    return (
        <>
        <Stack bgColor="#fff" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading mb="24px">
                    About Mediacom
                    </Heading>
                        <Text>
                        Mediacom is the fifth-largest cable TV provider in the United States and provides high-speed internet, TV, and phone services to residential customers. With internet speeds up to 1000 Mbps and no contract options, the ISP (Internet Service Provider) customers stay connected and entertained when it counts the most.<br/><br/>

                        Mediacom's home internet services are available to 7.7 million people across a smattering of regions in the Midwest, the Gulf Coast, the Eastern Seaboard and in California and Arizona.   
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-mediacom-image.jpg" alt="About Image Mediacom" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About