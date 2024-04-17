// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
// import { pieChartData, pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";



export default function Conversion(props) {
  const { salesData } = props;

   console.log(salesData)
  function calculateDiscount(data) {
    let Totaldiscount = 0;
    if (data) {
      for (const item of data) {
        Totaldiscount += item.discount_amount;
      }
    }
    return Totaldiscount;
  }
  const Totaldiscount = calculateDiscount(salesData?.sales);

  function calculateNetSales(data) {
    let TotalNetSales = 0;
    if (data) {
      for (const item of data) {
        TotalNetSales += item?.net_sales;
      }
    }
    return TotalNetSales;
  }
  const TotalNetSales = calculateNetSales(salesData?.sales);

  function calculateTaxSales(data) {
    let TotalTaxSales = 0;
    if (data) {
      for (const item of data) {
        TotalTaxSales += item?.total_tax_amount;
      }
    }
    return TotalTaxSales;
  }
  const TotalTaxSales = calculateTaxSales(salesData?.sales);

  // Calculate percentages
  let totalSales = Totaldiscount + TotalNetSales + TotalTaxSales;
   let discountPercentage = ((Totaldiscount / totalSales) * 100)
   let netSalesPercentage = ((TotalNetSales / totalSales) * 100)
   let taxAmountPercentage = ((TotalTaxSales / totalSales) * 100)
  
  

  const pieChartOptions = {
    labels: ["Discount Percentage", "Net Sales Percentage", "Tax Amount Percentage"],
    colors: ["#4318FF", "#6AD2FF", "#f6b042"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#4318FF", "#6AD2FF", "#f6b042"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const pieChartData = [discountPercentage, netSalesPercentage, taxAmountPercentage];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p='20px' align='center' direction='column' w='100%' >
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
        Sales Pie Chart
        </Text>

      </Flex>

      <PieChart
        h='100%'
        w='100%'
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection='column'
        boxShadow={cardShadow}
        w='100%'
        p='15px'
        px='20px'
        mt='15px'
        mx='auto'>
        <Flex direction='column' py='5px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='brand.500' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
              Total Discount
            </Text>
          </Flex>
          {/* <Text fontSize='lg' color={textColor} fontWeight='700'>
           {Totaldiscount.toFixed(2)}
          </Text> */}
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='red ' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
                          Total Tax Amount
            </Text>
          </Flex>
          {/* <Text fontSize='lg' color={textColor} fontWeight='700'>
            {TotalTaxSales.toFixed(2)}
          </Text> */}
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction='column' py='5px' me='10px'>
          <Flex align='center'>
            <Box h='8px' w='8px' bg='#6AD2FF' borderRadius='50%' me='4px' />
            <Text
              fontSize='xs'
              color='secondaryGray.600'
              fontWeight='700'
              mb='5px'>
                          Total Net Sales
            </Text>
          </Flex>
          {/* <Text fontSize='lg' color={textColor} fontWeight='700'>
            {TotalNetSales.toFixed(2)}
          </Text> */}
        </Flex>
      </Card>
    </Card>
  );
}
