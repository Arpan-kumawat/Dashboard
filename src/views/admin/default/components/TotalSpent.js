// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// import LineChart from "components/charts/LineChart";
import SplineAreaChart from "components/charts/LineChart"
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';



export default function TotalSpent(props) {
 
  const { salesData, lastData, showHour, hourlyData } = props;
 console.log(hourlyData)
console.log(showHour)
      let currentmonthsale= showHour ? hourlyData.sales : salesData.sales
  // let currentmonthsale=salesData?.sales
  let lastmonthsale= lastData?.sales


  console.log(currentmonthsale);
  console.log(lastmonthsale);
  let constCurrentMonthSales = currentmonthsale?.map((e) => Number(e.gross_sales.toFixed(2)))
  let constLastMonthSales= lastmonthsale?.map((e) => Number(e.gross_sales.toFixed(2)))

  let constDate = currentmonthsale?.map((e)=>e.business_date)

  console.log(constCurrentMonthSales);
  console.log(constLastMonthSales);

   const lineChartDataTotalSpent = [
    {
      name: "Last Month Sales",
      data: lastmonthsale ? constLastMonthSales : [],
    }, 
    {
      name: "Present Month Sales",
      data: currentmonthsale ? constCurrentMonthSales: [],
    },
  ];

  console.log(lineChartDataTotalSpent)
  // console.log(lineChartDataTotalSpent1)
  
   const lineChartOptionsTotalSpent = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: ["#4318FF", "#39B8FF"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#7551FF",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
    },
    xaxis: {
      type: "numeric",
      // categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      categories: constDate,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
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
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      column: {
        color: ["#7551FF", "#39B8FF"],
        opacity: 0.5,
      },
    },
    color: ["#7551FF", "#39B8FF"],
  };
  
  const downloadExportFile = async (salesData) => {
    let exportData = [];
    if (salesData && salesData.length) {
      salesData.forEach((element, index) => {
        let obj = {};
        for (const key in element) {
          if (key !== '_id') {
            const str = `${key.trim().split('_').map((ele) => ele?.trim()?.toUpperCase()).join(' ')}`;
            obj[`${str}`] = element[key];
          }
        }
        exportData.push(obj);
      });
      const csvData = Papa.unparse(exportData);
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
      console.log(blob)
      saveAs(blob, 'Sales Data.csv');
    }
  };
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      // {...rest}
      >
       <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'>
          Total Sales
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
          onClick={() => downloadExportFile(salesData.sales)} 
          // {...rest}
           >
          <Icon as={DownloadIcon} />
        </Button>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
     
        <Box minH='260px' minW='90%' m='auto'>
          <SplineAreaChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  );
}
