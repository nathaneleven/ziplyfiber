import React from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const LogoHeader = () => {
  return (
    <>
    <Box>
      <Link href="/"><Image src="/logo-ziply-fiber.svg"/></Link>
    </Box>
    </>
  )
}

export default LogoHeader
