import { Box , Flex , Spacer , Text , Avatar } from '@chakra-ui/react'
import { FaBed , FaBath } from 'react-icons/fa';
import { BsGridFill  } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import {fetchApi , baseUrl} from '../../utils/fetchApis';

import React from 'react';
import ImageScrollBar from '../../components/ImageScrollBar';

const PropertyDetails = ({propertyDetail : {price , rentFrequency , rooms , baths , area , agency , isVerified , description ,title , type , purpose , furnishingStatus , amenities , photos}}) => {
    // amenities.map(item=> {
    //     item.amenities.map(amenity=>{
    //         console.log(amenity);
    //     }) 
    // });


    return (
    <Box maxWidth={1000} margin='auto' p={4}>
        {photos && <ImageScrollBar data={photos} /> }
        <Box w='full' p={6}>
            <Flex paddingTop={2} justifyContent='space-between' alignItems='center'>
                <Flex alignItems='center'>
                    <Box paddingRight={3} color='green.400'>{isVerified && <GoVerified/> }</Box>
                    <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                </Flex>
                <Box>
                    <Avatar size='sm' src={agency?.logo?.url} />
                </Box>
            </Flex>
            <Flex alignItems='center' p={1} justifyContent='space-between' w={250} color='blue.400' >
                {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Box marginTop={2} >
                <Text fontSize='lg' marginBottom={2} fontWeight='bold'>
                    {title}
                </Text>
                <Text lineHeight={2} color='gray.600'>
                    {description}
                </Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                <Flex justifyContent='space-between' w={400} borderBottom={1} borderColor='gray.100' p={3}>
                    <Text>Type</Text>
                    <Text fontWeight='bold'>{type}</Text>
                </Flex>
                <Flex justifyContent='space-between' w={400} borderBottom={1} borderColor='gray.100' p={3}>
                    <Text>Purpose</Text>
                    <Text fontWeight='bold'>{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                    <Flex justifyContent='space-between' w={400} borderBottom={1} borderColor='gray.100' p={3}>
                        <Text>Furnishing Status</Text>
                        <Text fontWeight='bold'>{furnishingStatus}</Text>
                    </Flex>
                )}
            </Flex>
            <Box>
                {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop={5}>Amenities</Text>}
                <Flex flexWrap='wrap'>
                    {amenities.map(item=> (
                        item.amenities.map(amenity=>(
                            <Text
                                key={amenity.text}
                                fontWeight='bold'
                                // fontSize='1'
                                m={1}
                                p={2}
                                color='blue.400'
                                bg='gray.200'
                                borderRadius={5}
                                >
                                {amenity.text}
                            </Text>
                        )) 
                    ))}
                </Flex>
            </Box>
        </Box>
    </Box>
)}

export default PropertyDetails;

export async function getServerSideProps({params : {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props : {
            propertyDetail : data
        }
    }
}
