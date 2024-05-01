import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";

import Menu from "components/menu/MainMenu";





// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import DefaultMaps from "../maps/default";

import MapTypeScatterBubbleSeries from "../newMap/index.tsx"

// export default function ColumnsTable(props) {



//   const { columnsData, tableData } = props;


 
//   const columns = useMemo(() => columnsData, [columnsData]);
//   const data = useMemo(() => tableData, [tableData]);

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     initialState,
//   } = tableInstance;
//   initialState.pageSize = 5;

//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
//   return (
//     <Card
//       direction='column'
//       w='100%'
//       px='0px'
//       overflowX={{ sm: "scroll", lg: "hidden" }}>

      
//       <Flex px='25px' justify='space-between' mb='10px' align='center'>
//         <Text
//           color={textColor}
//           fontSize='22px'
//           fontWeight='700'
//           lineHeight='100%'>
//           Store Location
//         </Text>
//       </Flex>
//       {/* <DefaultMaps storeData={tableData}/> */}
// <MapTypeScatterBubbleSeries/>
   
//     </Card>
//   );
//}
export default function ColumnsTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 10;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card direction="column" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
      {/* Remove typography "Store Location" */}
      {/* <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          Store Location
        </Text>
      </Flex> */}
      {/* Render the map component inside a Flex container */}
      <Flex w="100%" h="100%" justify="center" align="center">
        {/* <DefaultMaps storeData={tableData}/> */}
        <MapTypeScatterBubbleSeries />
      </Flex>
    </Card>
  );
}
