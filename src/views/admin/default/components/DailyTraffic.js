
// import React from "react";
// import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// import BarChart from "components/charts/BarChart";
// import Card from "components/card/Card.js";
// import { RiArrowUpSFill } from "react-icons/ri";

// export default function DailyTraffic(props) {
//   const { salesData } = props;
//   console.log(salesData.sales);

//   let constSale = salesData.sales;
//   let constOrders = constSale.map((e) => e.orders);
//   let totalOrders = constOrders.reduce((total, orders) => total + orders, 0);
//   let constDate = constSale.map((e) => e.business_date);

//   const barChartDataDailyTraffic = [
//     {
//       name: "Daily Orders",
//       data: constOrders ? constOrders : [],
//     },
//   ];
//   const barChartOptionsDailyTraffic = {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//     },
//     tooltip: {
//       style: {
//         fontSize: "12px",
//         fontFamily: undefined,
//       },
//       onDatasetHover: {
//         style: {
//           fontSize: "12px",
//           fontFamily: undefined,
//         },
//       },
//       theme: "dark",
//     },
//     xaxis: {
//       categories: constDate,
//       show: false,
//       labels: {
//         show: true,
//         style: {
//           colors: "#A3AED0",
//           fontSize: "10px",
//           fontWeight: "300",
//         },
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       show: false,
//       color: "black",
//       labels: {
//         show: true,
//         style: {
//           colors: "#CBD5E0",
//           fontSize: "14px",
//         },
//       },
//     },
//     grid: {
//       show: false,
//       strokeDashArray: 5,
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: false,
//         },
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         type: "vertical",
//         shadeIntensity: 1,
//         opacityFrom: 0.7,
//         opacityTo: 0.9,
//         colorStops: [
//           [
//             {
//               offset: 0,
//               color: "#4318FF",
//               opacity: 1,
//             },
//             {
//               offset: 100,
//               color: "rgba(67, 24, 255, 1)",
//               opacity: 0.28,
//             },
//           ],
//         ],
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 10,
//         columnWidth: "40px",
//       },
//     },
//   };

//   const textColor = useColorModeValue("secondaryGray.900", "white");

//   return (
//     <Card align="center" direction="column" w="100%">
//       <Flex justify="space-between" align="start" px="10px" pt="5px">
//         <Flex flexDirection="column" align="start" me="20px">
//           <Flex w="100%">
//             <Text
//               me="auto"
//               color="secondaryGray.600"
//               fontSize="sm"
//               fontWeight="500"
//             >
//               Daily Orders
//             </Text>
//           </Flex>
//           <Flex align="end">
//             <Text
//               color={textColor}
//               fontSize="34px"
//               fontWeight="700"
//               lineHeight="100%"
//             >
//               {/* Display the total orders */}
//               {totalOrders}
//             </Text>
         
//           </Flex>
//         </Flex>
//         <Flex align="center">
//           <Icon as={RiArrowUpSFill} color="green.500" />
//           <Text color="green.500" fontSize="sm" fontWeight="700">
//             {/* Dummy percentage */}
//             +2.45%
//           </Text>
//         </Flex>
//       </Flex>
//       <Box h="240px" mt="auto">
//         <BarChart
//           chartData={barChartDataDailyTraffic}
//           chartOptions={barChartOptionsDailyTraffic}
//         />
//       </Box>
//     </Card>
//   );
// }

// import React from "react";
// import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// import BarChart from "components/charts/BarChart";
// import Card from "components/card/Card.js";
// import { RiArrowUpSFill } from "react-icons/ri";

// export default function DailyTraffic(props) {
//   const { salesData } = props;
//   console.log(salesData.sales);

//   let constSale = salesData.sales;
//   let constOrders = constSale.map((e) => e.orders);
//   let totalOrders = constOrders.reduce((total, orders) => total + orders, 0);
//   let constDate = constSale.map((e) => e.business_date);

//   const barChartDataDailyTraffic = [
//     {
//       name: "Daily Orders",
//       data: constOrders ? constOrders : [],
//     },
//   ];
//   const barChartOptionsDailyTraffic = {
//     annotations: {
//       points: [{
//         x: 'Bananas',
//         seriesIndex: 0,
//         label: {
//           borderColor: '#775DD0',
//           offsetY: 0,
//           style: {
//             color: '#fff',
//             background: '#775DD0',
//           },
//           text: 'Bananas are good',
//         }
//       }]
//     },
//     chart: {
//       height: 350,
//       type: 'bar',
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: 10,
//         columnWidth: '50%',
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       width: 0
//     },
//     grid: {
//       row: {
//         colors: ['#fff', '#f2f2f2']
//       }
//     },
//     xaxis: {
//       labels: {
//         rotate: -45
//       },
//       categories: constDate,
//       tickPlacement: 'on'
//     },
//     yaxis: {
//       title: {
//         text: 'Servings',
//       },
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shade: 'light',
//         type: "horizontal",
//         shadeIntensity: 0.25,
//         gradientToColors: undefined,
//         inverseColors: true,
//         opacityFrom: 0.85,
//         opacityTo: 0.85,
//         stops: [50, 0, 100]
//       },
//     }
//   },
//   };

//   const textColor = useColorModeValue("secondaryGray.900", "white");

//   return (
//     <Card align="center" direction="column" w="100%">
//       <Flex justify="space-between" align="start" px="10px" pt="5px">
//         <Flex flexDirection="column" align="start" me="20px">
//           <Flex w="100%">
//             <Text
//               me="auto"
//               color="secondaryGray.600"
//               fontSize="sm"
//               fontWeight="500"
//             >
//               Daily Orders
//             </Text>
//           </Flex>
//           <Flex align="end">
//             <Text
//               color={textColor}
//               fontSize="34px"
//               fontWeight="700"
//               lineHeight="100%"
//             >
//               {/* Display the total orders */}
//               {totalOrders}
//             </Text>
         
//           </Flex>
//         </Flex>
//         <Flex align="center">
//           <Icon as={RiArrowUpSFill} color="green.500" />
//           <Text color="green.500" fontSize="sm" fontWeight="700">
//             {/* Dummy percentage */}
//             +2.45%
//           </Text>
//         </Flex>
//       </Flex>
//       <Box h="240px" mt="auto">
//         <BarChart
//           chartData={barChartDataDailyTraffic}
//           chartOptions={barChartOptionsDailyTraffic}
//         />
//       </Box>
//     </Card>
//   );
// }
import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import ApexChart from "components/charts/BarChart";
import Card from "components/card/Card.js";
import { RiArrowUpSFill } from "react-icons/ri";

export default function DailyTraffic(props) {
  const { salesData } = props;
  console.log(salesData.sales);

  let constSale = salesData.sales;
  let constOrders = constSale.map((e) => e.orders);
  let totalOrders = constOrders.reduce((total, orders) => total + orders, 0);
  let constDate = constSale.map((e) => e.business_date);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card align="center" direction="column" w="100%">
      <Flex justify="space-between" align="start" px="10px" pt="5px">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text
              me="auto"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Daily Orders
            </Text>
          </Flex>
          <Flex align="end">
            <Text
              color={textColor}
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              {/* Display the total orders */}
              {totalOrders}
            </Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <Icon as={RiArrowUpSFill} color="green.500" />
          <Text color="green.500" fontSize="sm" fontWeight="700">
            {/* Dummy percentage */}
            +2.45%
          </Text>
        </Flex>
      </Flex>
      <Box h="240px" mt="auto">
        <ApexChart
          chartData={[
            {
              name: "Daily Orders",
              data: constOrders ? constOrders : [],
            },
          ]}
          chartOptions={{
            annotations: {
              points: [
                {
                  
                  seriesIndex: 0,
                  label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                      color: '#fff',
                      background: '#775DD0',
                    },
                    
                  },
                },
              ],
            },
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '50%',
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              width: 0,
            },
            grid: {
              row: {
                colors: ['#fff', '#f2f2f2'],
              },
            },
            xaxis: {
              labels: {
                rotate: -45,
              },
              categories: constDate,
              tickPlacement: 'on',
            },
            yaxis: {
              title: {
                text: 'Orders',
              },
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100],
              },
            },
          }}
        />
      </Box>
    </Card>
  );
}
