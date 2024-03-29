import Link from 'next/link'
import { Menu , MenuButton , MenuList , IconButton , Box , Spacer, Flex, MenuItem } from '@chakra-ui/react';
import { FcMenu , FcAbout , FcHome, FcContacts } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => {
  return (
      <Flex p={2} borderBottom={1} borderColor='gray.100'>
          <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
              <Link href='/' paddingLeft={2}>Realtor</Link>
          </Box>
          <Spacer />
          <Box>
              <Menu>
                  <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
                  <MenuList>
                      <Link href='/' passHref>
                          <MenuItem icon={<FcHome />} >Home</MenuItem>
                      </Link>
                      <Link href='/search' passHref>
                          <MenuItem icon={<BsSearch />} >Search</MenuItem>
                      </Link>
                      <Link href='/search?purpose=for-sale' passHref>
                          <MenuItem icon={<FcAbout />} >Buy Property</MenuItem>
                      </Link>
                      <Link href='/search?purpose=for-rent' passHref>
                          <MenuItem icon={<FiKey />} >Rent Property</MenuItem>
                      </Link>
                      <Link href='/contact' passHref>
                          <MenuItem icon={<FcContacts />} >Contact Us</MenuItem>
                      </Link>
                  </MenuList>
              </Menu>
          </Box>
      </Flex>
  )
};

export default Navbar;
