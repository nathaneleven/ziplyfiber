import React from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const LogoHeader = () => {
  return (
    <>
    <Box>
      <Link href="/"><Image src="/logo-xtream-mediacom.svg"/></Link>
    </Box>
    </>
  )
}

export default LogoHeader
