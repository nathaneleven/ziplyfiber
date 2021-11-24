import React from 'react'
import { Flex, Box, Heading, AspectRatio, Stack, Text, List, ListIcon, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'

const Peacock = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","2"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading color="#009300" mb="24px">
            Enjoy Peacock Premium 
            </Heading>
            <Text>Peacock is the streaming service from NBCUniversal. It’s thousands of hours of movies and shows, exclusive Originals, live sports, WWE, breaking news and more!<br/><br/>

Get 90-days of Peacock Premium (a $4.99/month value) with your Ziply Fiber internet service. </Text>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} mt="0 !important" justify="flex-end">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -120px","0 -120px","0 -190px","0 -190px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/peacock-ziply-fiber-image.jpg" alt="Peacock Image Ziply Fiber" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default Peacock
