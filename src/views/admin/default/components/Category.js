// Chakra imports
import {
    Box,
    Flex,
    Text,
    Icon,
    useColorModeValue,
    Checkbox,
    Grid,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/card/Card.js";
  import Menu from "components/menu/MainMenu";
  import IconBox from "components/icons/IconBox";
  
  // Assets
  import { MdCheckBox, MdDragIndicator } from "react-icons/md";
  import React from "react";
  import { Typography } from "@material-ui/core";
  
  export default function Category(props) {
    const { salesData} = props;
  
    console.log(salesData)

    const item=salesData.map((e)=>e.item_details)
    console.log(item)



const flattenedArray = item.flat();
const categoryIds = flattenedArray.map(obj => obj.item_name);
const categoryCounts = {};
categoryIds.forEach(id => {
  categoryCounts[id] = (categoryCounts[id] || 0) + 1;
});

const sortedCategoryIds = Object.keys(categoryCounts).sort((a, b) => categoryCounts[b] - categoryCounts[a]);
const top5CategoryIds = sortedCategoryIds.slice(0, 5);

console.log("Top 5 repeating category IDs:", top5CategoryIds);



//   const KioskCount = salesData.filter(order => order.order_source_code === "KIOSK").length;
//   const qrCount = salesData.filter(order => order.order_source_code === "QR").length;

// console.log("Count of 'POS' order_source_code:", posCount);

// console.log("Count of 'QR' order_source_code:", qrCount);

// console.log("Count of 'kiosk' order_source_code:", KioskCount);
  
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
    const brandColor = useColorModeValue("brand.500", "brand.400");
    return (
      <Card p='20px' align='center' direction='column' w='100%' >
        <Flex alignItems='center' w='100%' mb='30px'>
          {/* <IconBox
            me='12px'
            w='38px'
            h='38px'
            bg={boxBg}
            icon={<Icon as={MdCheckBox} color={brandColor} w='24px' h='24px' />}
          /> */}
  
          <Text color={textColor} fontSize='lg' fontWeight='700'>
           Top 5 Selling Items
          </Text>
          
          {/* <Menu ms='auto' /> */}
        </Flex>
        <Box px='11px'>

        <ul class="b">
 

            {top5CategoryIds.map((e)=> 
         <li>

       <Flex mb='20px' style={{    display: "flex",
      justifyContent: "space-between"}}>
    

         
            <Text
              fontWeight='bold'
              color={textColor}
              fontSize='md'
              textAlign='start'>
               {e}
            </Text>  
       
         
          </Flex>   </li>
 ) }
  </ul>
     
  
          {/* <Flex mb='20px'>
            <Checkbox me='16px' colorScheme='brandScheme' />
            <Text
              fontWeight='bold'
              color={textColor}
              fontSize='md'
              textAlign='start'>
              Illustrations
            </Text>
            <Icon
              ms='auto'
              as={MdDragIndicator}
              color='secondaryGray.600'
              w='24px'
              h='24px'
            />
          </Flex>
          <Flex mb='20px'>
            <Checkbox defaultChecked me='16px' colorScheme='brandScheme' />
            <Text
              fontWeight='bold'
              color={textColor}
              fontSize='md'
              textAlign='start'>
              Promotional LP
            </Text>
            <Icon
              ms='auto'
              as={MdDragIndicator}
              color='secondaryGray.600'
              w='24px'
              h='24px'
            />
          </Flex> */}
  
  
        </Box>
      </Card>
    );
  }
  