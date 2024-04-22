// import React from "react";

// // Chakra imports
// import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// import BarChart from "components/charts/BarChart";

// // Custom components
// import Card from "components/card/Card.js";
// import {
//   barChartDataDailyTraffic,
//   barChartOptionsDailyTraffic,
// } from "variables/charts";

// // Assets
// import { RiArrowUpSFill } from "react-icons/ri";

// export default function DailyTraffic(props) {
//   const { salesData} = props;

//   console.log(salesData.sales)
//   let constSale=salesData.sales
//   let constOrders = constSale.map((e)=>e.orders)
//   let constDate = constSale.map((e)=>e.business_date)

//   const barChartDataDailyTraffic = [
//     {
//       name: "Daily Orders",
//       data: constOrders ? constOrders : [],
//     },
//   ];
//  const barChartOptionsDailyTraffic = {
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
//       // categories: ["00", "04", "08", "12", "14", "16", "18"],
//       categories: constDate,
//       show: false,
//       labels: {
//         show: true,
//         style: {
//           colors: "#A3AED0",
//           fontSize: "14px",
//           fontWeight: "500",
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
//   // Chakra Color Mode
//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   return (
//     <Card align='center' direction='column' w='100%' >
//       <Flex justify='space-between' align='start' px='10px' pt='5px'>
//         <Flex flexDirection='column' align='start' me='20px'>
//           <Flex w='100%'>
//             <Text
//               me='auto'
//               color='secondaryGray.600'
//               fontSize='sm'
//               fontWeight='500'>
//               Daily Transactions
//             </Text>
//           </Flex>
//           <Flex align='end'>
//             <Text
//               color={textColor}
//               fontSize='34px'
//               fontWeight='700'
//               lineHeight='100%'>
//               2.579
//             </Text>
//           </Flex>
//         </Flex>
//         <Flex align='center'>
//           <Icon as={RiArrowUpSFill} color='green.500' />
//           <Text color='green.500' fontSize='sm' fontWeight='700'>
//             +2.45%
//           </Text>
//         </Flex>
//       </Flex>
//       <Box h='240px' mt='auto'>
//         <BarChart
//           chartData={barChartDataDailyTraffic}
//           chartOptions={barChartOptionsDailyTraffic}
//         />
//       </Box>
//     </Card>
//   );
// }
// import React from "react";

// // Chakra imports
// import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// import BarChart from "components/charts/BarChart";

// // Custom components
// import Card from "components/card/Card.js";
// import { RiArrowUpSFill } from "react-icons/ri";

// export default function DailyTraffic(props) {
//   const { salesData } = props;

//   console.log
//   // Extracting data from the API response
//   const chartData = salesData?.sales.map((item) => ({
//     y: item.orders, // Daily orders on the y-axis
//     x: new Date(item.business_date), // Business date on the x-axis
//   }));

//   // Chart options
//   const chartOptions = {
//     labels: {
//       x: "Business Date",
//       y: "Daily Orders",
//     },
//     colors: ["#4318FF"],
//     chart: {
//       width: "100%",
//       height: "100%",
//     },
//     xaxis: {
//       type: "datetime",
//       labels: {
//         format: "dd-MM-yyyy", // Date format for x-axis labels
//       },
//     },
//     yaxis: {
//       title: {
//         text: "Daily Orders",
//       },
//     },
//     tooltip: {
//       x: {
//         format: "dd-MM-yyyy", // Tooltip date format
//       },
//     },
//   };

//   // Chakra Color Mode
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
//               Daily Transactions
//             </Text>
//           </Flex>
//           <Flex align="end">
//             <Text
//               color={textColor}
//               fontSize="34px"
//               fontWeight="700"
//               lineHeight="100%"
//             >
//               2.579
//             </Text>
//             <Text
//               ms="6px"
//               color="secondaryGray.600"
//               fontSize="sm"
//               fontWeight="500"
//             >
//               Visitors
//             </Text>
//           </Flex>
//         </Flex>
//         <Flex align="center">
//           <Icon as={RiArrowUpSFill} color="green.500" />
//           <Text color="green.500" fontSize="sm" fontWeight="700">
//             +2.45%
//           </Text>
//         </Flex>
//       </Flex>
//       <Box h="240px" mt="auto">
//         <BarChart chartData={chartData} chartOptions={chartOptions} />
//       </Box>
//     </Card>
//   );
// }
// import React from "react";

// // Chakra imports
// import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// import BarChart from "components/charts/BarChart";

// // Custom components
// import Card from "components/card/Card.js";
// import { RiArrowUpSFill } from "react-icons/ri";

// export default function DailyTraffic(props) {
//   const { salesData } = props;

//   console.log(salesData.sales)
//   // Calculate total orders on each business date
//   // const ordersByDate = {};
//   // salesData?.sales.forEach((item) => {
//   //   const date = item.business_date;
//   //   if (!ordersByDate[date]) {
//   //     ordersByDate[date] = item.orders;
//   //   } else {
//   //     ordersByDate[date] += item.orders;
//   //   }
//   // });
//   //    console.log(ordersByDate)
//   // Prepare chart data from calculated orders by date

 

//   const chartData = Object.entries(ordersByDate).map(([date, orders]) => ({
//     x: date,
//     y: orders,
//   }));
// console.log(chartData)
//   // Chart options
//   const chartOptions = {
//     labels: {
//       x: "Business Date",
//       y: "Total Orders",
//     },
//     colors: ["#4318FF"],
//     chart: {
//       width: "100%",
//       height: "100%",
//     },
//     xaxis: {
//       type: "datetime",
//       labels: {
//         format: "dd-MM-yyyy",
//       },
//     },
//     yaxis: {
//       title: {
//         text: "Total Orders",
//       },
//     },
//     tooltip: {
//       x: {
//         format: "dd-MM-yyyy",
//       },
//     },
//   };

//   // Chakra Color Mode
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
//               Daily Transactions
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
//               {Object.values(ordersByDate).reduce((total, orders) => total + orders, 0)}
//             </Text>
//             <Text
//               ms="6px"
//               color="secondaryGray.600"
//               fontSize="sm"
//               fontWeight="500"
//             >
//               Orders
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
//         <BarChart chartData={chartData} chartOptions={chartOptions} />
//       </Box>
//     </Card>
//   );
// }
import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";
import Card from "components/card/Card.js";
import { RiArrowUpSFill } from "react-icons/ri";

export default function DailyTraffic(props) {
  const { salesData } = props;
  console.log(salesData.sales);

  let constSale = salesData.sales;
  let constOrders = constSale.map((e) => e.orders);
  let totalOrders = constOrders.reduce((total, orders) => total + orders, 0);
  let constDate = constSale.map((e) => e.business_date);

  const barChartDataDailyTraffic = [
    {
      name: "Daily Orders",
      data: constOrders ? constOrders : [],
    },
  ];
  const barChartOptionsDailyTraffic = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: constDate,
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "10px",
          fontWeight: "300",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#CBD5E0",
          fontSize: "14px",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: "#4318FF",
              opacity: 1,
            },
            {
              offset: 100,
              color: "rgba(67, 24, 255, 1)",
              opacity: 0.28,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "40px",
      },
    },
  };

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
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
  );
}
