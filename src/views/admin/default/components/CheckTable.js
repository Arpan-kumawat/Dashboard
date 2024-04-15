import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
export default function CheckTable(props) {
  const { columnsData, tableData, salesData } = props;



const [country, setCountry] = React.useState("India");

  let storeCountryUS= salesData.filter((e)=>e.store_details.currencycode==="USD")
  let storeCountryINDIA= salesData.filter((e)=>e.store_details.currencycode==="INR")


let  storeCountry = country==="India" ? storeCountryINDIA:storeCountryUS


  const sumByStoreId = {};
  storeCountry.forEach((item) => {
    if (sumByStoreId[item.store_details.store_id]) {
      sumByStoreId[item.store_details.store_id].net_sales += item.total_net_sale;
      sumByStoreId[item.store_details.store_id].orders += item.total_item_tax;
    } else {
      sumByStoreId[item.store_details.store_id] = {
        total_net_sale: item.total_net_sale,
        total_item_tax: item.total_item_tax,
      };
    }
  });

  // Step 2: Convert the object into an array of objects
  const netSalesArray = Object.entries(sumByStoreId).map(
    ([storeId, { total_net_sale, total_item_tax }]) => ({
      storeId: parseInt(storeId),
      total_net_sale,
      total_item_tax,
    })
  );

  // Step 3: Sort the array based on net sales in descending order
  netSalesArray.sort((a, b) => b.net_sales - a.net_sales);

  // Step 4: Get the top 5 net sales
  const top5NetSales = netSalesArray.slice(0, 5);

  console.log(top5NetSales);

  console.log(country)

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
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"

        >
       Top 5 Performing Stores {country}
        </Text>
        <Menu 
           {...props}
           {...{
            setCountry
           }}
        
          />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px" mt="1rem">
        <Thead>
          <Tr>
            <Th pe="10px" borderColor={borderColor}>
              <Flex
                justify="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"
              >
                Store
              </Flex>
            </Th>
            <Th pe="10px" borderColor={borderColor}>
              <Flex
                justify="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"
              >
                Total Tax
              </Flex>
            </Th>
            <Th pe="10px" borderColor={borderColor}>
              <Flex
                justify="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"
              >
                Net Sales
              </Flex>
            </Th>
          </Tr>
        </Thead>

        <Tbody>

          {top5NetSales.map((e)=>  
          <Tr>
            <Td
              fontSize={{ sm: "14px" }}
              minW={{ sm: "150px", md: "200px", lg: "auto" }}
              borderColor="transparent"
            >
              <Flex align="center">
                {/* <Checkbox
                  // defaultChecked={cell.value[1]}
                  colorScheme="brandScheme"
                  me="10px"
                /> */}
                <Text color={textColor} fontSize="sm" fontWeight="700">
                  {e.storeId}
                </Text>
              </Flex>
            </Td>

            <Td
              fontSize={{ sm: "14px" }}
              minW={{ sm: "150px", md: "200px", lg: "auto" }}
              borderColor="transparent"
            >
              <Flex align="center">
                <Text color={textColor} fontSize="sm" fontWeight="700">
                {country==="India"?"₹":"$"}   {e.total_item_tax}
                </Text>
              </Flex>
            </Td>

            <Td
              fontSize={{ sm: "14px" }}
              minW={{ sm: "150px", md: "200px", lg: "auto" }}
              borderColor="transparent"
            >
              <Flex align="center">
                <Text color={textColor} fontSize="sm" fontWeight="700">
             {country==="India"?"₹":"$"}   {e.total_net_sale}
                </Text>
              </Flex>
            </Td>
          </Tr>
 )}

        </Tbody>
      </Table>
    </Card>
  );
}
