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
import React  from "react";


// Custom components
import Card from "components/card/Card";
export default function CheckTable(props) {
  const {salesData,Currency,ALLStoreORDeR,SelectStore } = props;

  const [country, setCountry] = React.useState(Currency === "INR"?"India":"US" );


const AllStore = []

console.log(ALLStoreORDeR)

  const sumByStoreId = {};
  // ALLStoreORDeR?.forEach((item) => {
  //   if (sumByStoreId[item.store_details.store_id]) {
  //     sumByStoreId[item.store_details.store_id].net_sales +=
  //       item.total_net_sale;
  //     sumByStoreId[item.store_details.store_id].orders += item.total_item_tax;
  //   } else {
  //     sumByStoreId[item.store_details.store_id] = {
  //       total_net_sale: item.total_net_sale,
  //       total_item_tax: item.total_item_tax,
  //     };
  //   }
  // });

  // // Step 2: Convert the object into an array of objects
  // const netSalesArray = Object.entries(sumByStoreId).map(
  //   ([storeId, { total_net_sale, total_item_tax }]) => ({
  //     storeId: parseInt(storeId),
  //     total_net_sale,
  //     total_item_tax,
  //   })
  // );

  // // Step 3: Sort the array based on net sales in descending order
  // netSalesArray.sort((a, b) => b.total_net_sale - a.total_net_sale);

  // // Step 4: Get the top 5 net sales
  // const top5NetSales = netSalesArray.slice(0, 5);

  // console.log(top5NetSales);




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
          Top 5 Performing Stores in {country}
        </Text>
       
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px" mt="1rem">
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
            {(SelectStore!=="INR") && (SelectStore!=="USD")  ?
            <Th pe="10px" borderColor={borderColor}>
              <Flex
                justify="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"
              >
             Store "{SelectStore}"
              </Flex>
            </Th>:""}
          </Tr>
        </Thead>

        {/* <Tbody>
          {top5NetSales.map((e) => (
            <Tr>
              <Td
                fontSize={{ sm: "14px" }}
                minW={{ sm: "150px", md: "200px", lg: "auto" }}
                borderColor="transparent"
              >
                <Flex align="center">
          
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
                    {Currency === "INR" ? "₹" : "$"} {e.total_item_tax}
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
                    {Currency === "INR" ? "₹" : "$"} {e.total_net_sale}
                  </Text>
                </Flex>
              </Td>

              {(SelectStore!=="INR") && (SelectStore!=="USD")  ?
              <Td
                fontSize={{ sm: "14px" }}
                minW={{ sm: "150px", md: "200px", lg: "auto" }}
                borderColor="transparent"
              >
                <Flex align="center">
                  <Text color={textColor} fontSize="sm" fontWeight="700">
                    {Currency === "INR" ? "₹" : "$"} {e.total_net_sale}
                  </Text>
                </Flex>
              </Td> :""}
            </Tr>
          ))}
        </Tbody> */}
      </Table>
    </Card>
  );
}

