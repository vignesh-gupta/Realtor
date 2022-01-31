import { useContext } from "react"; 
import Image from "next/image";
import { Box , Icon , Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft , FaArrowAltCircleRight} from "react-icons/fa";

import React from 'react';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    // console.log(VisibilityContext.scrollPrev);
    return (
        <Flex justifyContent='center' alignItems='center' marginRight={1} >
            <Icon as={FaArrowAltCircleLeft} onClick={()=>scrollPrev()} fontSize='2xl' cursor='pointer' />
        </Flex>
    )
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Flex justifyContent='center' alignItems='center' marginLeft={1} >
            <Icon as={FaArrowAltCircleRight} onClick={()=>scrollNext()} fontSize='2xl' cursor='pointer' />
        </Flex>
    )
}

const ImageScrollBar = ({data}) => {
  return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow:'hidden'}}>
          {data.map((item)=> (
              <Box width={910} key={item.id} itemID={item.id} overflow='hidden' p={1}>
                  <Image 
                    src={item.url} 
                    placeholder='blur' 
                    blurDataURL={item.url} 
                    width={1000} height={500}
                    alt="image"
                    sizes="(max-width:500px) 100px , (max-width:1024px) 400px , 1000px"
                    />
              </Box>
          ))}
      </ScrollMenu>
  )
};

export default ImageScrollBar;
