import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Flex,
  Text,
  useColorMode,
  Button,
  Link as CLink,
} from '@chakra-ui/core'

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box p={2} mx="auto" maxW={600}>
      <Flex
        justify="space-between"
        align="center"
        borderBottom="4px"
        borderColor="gray.500"
        mb={5}
      >
        <Link to="/">
          <Text
            fontSize="3xl"
            color="purple.300"
            fontWeight="bold"
            mb={-2}
            zIndex={-1}
          >
            chris bailey (dev)
          </Text>
        </Link>

        <Button
          onClick={toggleColorMode}
          color={colorMode === 'light' ? 'black' : 'white'}
          size="sm"
        >
          {colorMode === 'light' ? '🌚' : '🌞'}
        </Button>
      </Flex>
      {children}
    </Box>
  )
}

export default Layout
