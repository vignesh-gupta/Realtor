import { Box } from "@chakra-ui/react";

import React from 'react';

const Footer = () => {
  return (
      <Box textAlign='center' p={5} color='gray.600' borderTop={1} borderColor='gray.100'>
          &copy; {new Date().getFullYear()} Realtor , Inc.
      </Box>
  );
};

export default Footer;
