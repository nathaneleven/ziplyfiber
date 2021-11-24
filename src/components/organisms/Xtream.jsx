import React from 'react'
import { Flex, Box, Heading, AspectRatio, Stack, Text, List, ListIcon, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'

const Xtream = () => {
    return (
        <>
        <Stack bgColor="#fff" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading mb="24px">
            Mediacom Xtream 
            </Heading>
            <Text>Xtream is a service provide by Mediacom that uses additional router pods to eliminate dead zones and better extend Wi-Fi throughout large homes. The Xtream by Mediacom features are:</Text>
            <List py="3" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    A top cable internet provider; 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Offers TV, internet and phone services; 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Providers Gbps speeds comparable to fiber optic; 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    All home internet plans are month to month. 
                </ListItem>
            </List>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} mt="0 !important" justify="flex-end">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/xtream-mediacom-image.jpg" alt="Xtream Image Mediacom" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default Xtream
