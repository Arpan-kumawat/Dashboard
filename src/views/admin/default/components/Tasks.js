// // Chakra imports
// import {
//   Box,
//   Flex,
//   Text,
//   Icon,
//   useColorModeValue,
//   Checkbox,
//   Grid,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// import Menu from "components/menu/MainMenu";
// import IconBox from "components/icons/IconBox";

// // Assets
// import { MdCheckBox, MdDragIndicator } from "react-icons/md";
// import React from "react";
// import { Typography } from "@material-ui/core";

// export default function Conversion(props) {
//   const { salesData } = props;

//   console.log(salesData);

//   const posCount = salesData.filter(
//     (order) => order.order_source_code === "POS"
//   ).length;
//   const KioskCount = salesData.filter(
//     (order) => order.order_source_code === "KIOSK"
//   ).length;
//   const qrCount = salesData.filter(
//     (order) => order.order_source_code === "QR"
//   ).length;

//   console.log("Count of 'POS' order_source_code:", posCount);

//   console.log("Count of 'QR' order_source_code:", qrCount);

//   console.log("Count of 'kiosk' order_source_code:", KioskCount);

//   // Chakra Color Mode
//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
//   const brandColor = useColorModeValue("brand.500", "brand.400");
//   return (
//     <Card p="20px" align="center" direction="column" w="100%">
//       <Flex alignItems="center" w="100%" mb="30px">
//         {/* <IconBox
//           me='12px'
//           w='38px'
//           h='38px'
//           bg={boxBg}
//           icon={<Icon as={MdCheckBox} color={brandColor} w='24px' h='24px' />}
//         /> */}

//         <Text color={textColor} fontSize="lg" fontWeight="700">
//           Device Order Count
//         </Text>

//         {/* <Menu ms='auto' /> */}
//       </Flex>
//       <Box px="11px">
//         <Flex
//           mb="20px"
//           style={{ display: "flex", justifyContent: "space-between" }}
//         >
//           <Text
//             fontWeight="bold"
//             color={textColor}
//             fontSize="md"
//             textAlign="start"
//           >
//             LEAP
//           </Text>
//           <Grid>
//             <Typography> {posCount}</Typography>
//           </Grid>
//         </Flex>

//         <Flex
//           mb="20px"
//           style={{ display: "flex", justifyContent: "space-between" }}
//         >
//           <Text
//             fontWeight="bold"
//             color={textColor}
//             fontSize="md"
//             textAlign="start"
//           >
//             QR
//           </Text>
//           <Grid>
//             <Typography>{qrCount}</Typography>
//           </Grid>
//         </Flex>

//         <Flex
//           mb="20px"
//           style={{ display: "flex", justifyContent: "space-between" }}
//         >
//           <Text
//             fontWeight="bold"
//             color={textColor}
//             fontSize="md"
//             textAlign="start"
//           >
//             BREEZ
//           </Text>
//           {KioskCount}
//         </Flex>

//       </Box>
//     </Card>
//   );
// }
// Chakra imports
// import {
//   Box,
//   Flex,
//   Text,
//   Icon,
//   useColorModeValue,
//   Grid,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// import React from "react";
// import { Typography } from "@material-ui/core";
// import {breezLogo} from "../../../../assets/img/breezLogo.png"
// import {leapLogo} from "../../../../assets/img/leapLogo.png"
// import {qrCode} from "../../../../assets/img/qrcode.png"
// export default function Conversion(props) {
//   const { salesData } = props;

//   console.log(salesData);

//   const posCount = salesData.filter(
//     (order) => order.order_source_code === "POS"
//   ).length;
//   const kioskCount = salesData.filter(
//     (order) => order.order_source_code === "KIOSK"
//   ).length;
//   const qrCount = salesData.filter(
//     (order) => order.order_source_code === "QR"
//   ).length;

// //   // Chakra Color Mode
//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const boxBg = useColorModeValue("secondaryGray.300", "navy.700");

//   return (
//     <Card p="20px" align="center" direction="column" w="100%">
//       <Flex alignItems="center" w="100%" mb="30px">
//         <Text color={textColor} fontSize="lg" fontWeight="700">
//           Device Order Count
//         </Text>
//       </Flex>
//       <Grid container spacing={2}>
//         <Grid item lg={4} xs={12}>
//           <Flex
//             mb="20px"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Text fontWeight="bold" color={textColor} fontSize="md">
//               LEAP
//             </Text>
//             <Typography>{posCount}</Typography>
//           </Flex>
//         </Grid>
//         <Grid item lg={4} xs={12}>
//            <Flex
//             mb="20px"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Text fontWeight="bold" color={textColor} fontSize="md">
//               QR
//             </Text>
//             <Typography>{qrCount}</Typography>
//           </Flex>
//         </Grid>
//         <Grid item lg={4} xs={12}>
//           <Flex
//             mb="20px"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Text fontWeight="bold" color={textColor} fontSize="md">
//               BREEZ
//             </Text>
//             <Typography>{kioskCount}</Typography>
//           </Flex>
//         </Grid>
//       </Grid>
//     </Card>
//   );
// }

import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { Typography } from "@material-ui/core";
import LeapLogo from "../../../../assets/img/leapLogo.png";
import QRCode from "../../../../assets/img/qrcode.png";
import BreezLogo from "../../../../assets/img/breezLogo.png";
import SwyftLogo from "../../../../assets/img/swyftLogo.png"
export default function Conversion(props) {
  const { salesData } = props;

  console.log(salesData);

  const posCount = salesData.filter(
    (order) => order.order_source_code === "POS"
  ).length;
  const kioskCount = salesData.filter(
    (order) => order.order_source_code === "KIOSK"
  ).length;
  const qrCount = salesData.filter(
    (order) => order.order_source_code === "QR"
  ).length;

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card p="25px" align="center" direction="column" w="100%">
      <Flex alignItems="center" w="100%" mb="30px">
        <Text color={textColor} fontSize="15px" fontWeight="700">
          Device Order Count
        </Text>
      </Flex>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12}>
          <Flex
            mb="30px"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={LeapLogo} alt="Leap Logo" style={{ width: "60px" }} />
            <Typography fontWeight="10px" >{posCount}</Typography>
          </Flex>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Flex
            mb="30px"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={QRCode} alt="QR Code" style={{ width: "30px" }} />
            <Typography  >{qrCount}</Typography>
          </Flex>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Flex
            mb="30px"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={BreezLogo} alt="Breez Logo" style={{ width: "65px", height: " 15px" }} />
            <Typography>{kioskCount}</Typography>
          </Flex>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Flex
            mb="30px"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={SwyftLogo} alt="Swyft Logo" style={{ width: "65px", height: " 20px" }} />
            <Typography>{0}</Typography>
          </Flex>
        </Grid>
      </Grid>
    </Card>
  );
}
