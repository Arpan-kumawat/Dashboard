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

export default function Conversion(props) {
  const { salesData} = props;

  console.log(salesData)

  const posCount = salesData.filter(order => order.order_source_code === "POS").length;
  const KioskCount = salesData.filter(order => order.order_source_code === "KIOSK").length;
  const qrCount = salesData.filter(order => order.order_source_code === "QR").length;

console.log("Count of 'POS' order_source_code:", posCount);

console.log("Count of 'QR' order_source_code:", qrCount);

console.log("Count of 'kiosk' order_source_code:", KioskCount);

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
          Device Count
        </Text>
        
        {/* <Menu ms='auto' /> */}
      </Flex>
      <Box px='11px'>
        <Flex mb='20px' style={{    display: "flex",
    justifyContent: "space-between"}}>
         
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            LEAP
          </Text>
          <Grid>
          <Typography> {posCount}
        </Typography> 
          </Grid>
       
        </Flex>


        <Flex mb='20px' style={{    display: "flex",
    justifyContent: "space-between"}}>
         
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            QR
          </Text>
  <Grid>


       <Typography>
        {qrCount}
       </Typography>
       </Grid>
        </Flex>

        <Flex mb='20px' style={{    display: "flex",
    justifyContent: "space-between"}}>
       
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
          BREEZ
          </Text>
        {KioskCount}
        </Flex>

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
