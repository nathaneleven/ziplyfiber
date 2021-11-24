import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
const Support = () => {
    return (
        <>
        <Stack bgColor="#F0F3F6" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading mb="24px">
                    Mediacom Customer Support
                    </Heading>
                        <Text>
                        Mediacom customer support is available 24 hours a day, 7 days a week for all customers and new inquiries. If you need technical support or wish to learn more about Mediacom services, you can contact a customer representative directly by phone or visit their Mediacom support page for more information. 
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/support-mediacom-image.jpg" alt="Support Image Mediacom" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default Support