// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChart from "components/charts/BarChart";
import React from "react";
// import {
//   barChartDataConsumption,
//   barChartOptionsConsumption,
// } from "variables/charts";
import { MdBarChart } from "react-icons/md";

export default function WeeklyRevenue(props) {
  const { salesData} = props;

  console.log(salesData.sales)

  let constSale=salesData.sales

  let constGrossSales = constSale.map((e) => e.gross_sales.toFixed(2));

  
  let constOrders = constSale.map((e)=>e.orders.toFixed(2))

  let constNetSales = constSale.map((e)=>e.net_sales.toFixed(2))
  
  let constHours = constSale.map((e)=>e.hour)


   const barChartDataConsumption = [
    {
      name: "Gross Sales",
      data: constGrossSales,
    },
    {
      name: "Orders",
      data: constOrders,
    },
    {
      name: "Net Sales",
      data: constNetSales,
    },
  ];
  
   const barChartOptionsConsumption = {
    chart: {
      stacked: true,
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
      categories: constHours,
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
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
        show: false,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },
  
    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#5E37FF", "#f6b042", "#f6b042"],
    },
    legend: {
      show: false,
    },
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "20px",
      },
    },
  };
  

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card align='center' direction='column' w='100%' >
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Hourly Revenue 
        </Text>
        <Button
          align='center'
          justifyContent='center'
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w='37px'
          h='37px'
          lineHeight='100%'
          borderRadius='10px'
          // {...rest}
          
          >
          <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
        </Button>
      </Flex>

      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}
