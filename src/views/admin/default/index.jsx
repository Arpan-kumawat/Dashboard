/*!
  _ _ _  ___  ____  ___ ________  _   _   _   _ ___   
 |  _  |  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | |_) || |  / / | | |  \| | | | | || | 
 |  _  |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|_| \_\___/____\___/|_| \_|  \___/|___|


                                                                                                                                                                                                                                                                                                                                     
=========================================================
* Horizon UI - v1.1.0
=========================================================
*/

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  // Grid,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Portal,
} from "@chakra-ui/react";

// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useState } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import Category from "views/admin/default/components/Category";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import { Grid, Typography } from "@material-ui/core";
import Navbar from "components/navbar/NavbarAdmin.js";
import { Spinner } from '@chakra-ui/react'

export default function UserReports(props) {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const [dateRange, setDateRange] = useState([new Date(), new Date()]); 
  const handleDateChange = (dates) => {
    setDateRange(dates);
    console.log("Selected date range:", dates);
  };

  const [loading, setLoading] = useState(true);
  const [Lastloading, setLastLoading] = useState(true);


  const [data, setData] = useState([]);
  const [lastData, setLastData] = useState([]);
  const [storeData, setStoreData] = useState([]);

  const [selectStore, setSelectStore] = useState('');

  const [orderData, setOrderData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [isLoading] = useState(true);
  const [reloading, setReLoading] = useState(true);
  const [reloadingPrev, setReloadingPrev] = useState(true);



          console.log(data);
          console.log(orderData);
          console.log(hourlyData);
          console.log(lastData)


          function calculateOrderCheck(data) {
            let TotalOrderCount = 0;
            if(data){
            for (const item of data) {
              TotalOrderCount += item.orders;
            }}
            return TotalOrderCount;
          }
          
          const TotalOrderCount = calculateOrderCheck(data?.sales);
          const LastTotalOrderCount = calculateOrderCheck(data?.sales);


          console.log(TotalOrderCount)
          console.log(LastTotalOrderCount.toFixed(2))


          function calculateRefundSales(data) {
            let TotalRefundSales = 0;
            if(data){
            for (const item of data) {
              TotalRefundSales += item.refund;
            }}
            return TotalRefundSales;
          }
          
          const TotalRefundSales = calculateRefundSales(data?.sales);
          const LastTotalRefundSales = calculateRefundSales(lastData?.sales);


 


          function calculateGrossSales(data) {
            let TotalGrossSales = 0;
            if(data){
            for (const item of data) {
              TotalGrossSales += item.gross_sales;
            }}
            return TotalGrossSales;
          }    
          const TotalGrossSales = calculateGrossSales(data?.sales);
          const LastTotalGrossSales = calculateGrossSales(lastData?.sales);


     
          function calculateNetSales(data) {
            let TotalNetSales = 0;
         
            if(data){
            for (const item of data) {
              TotalNetSales += item?.net_sales;
           
            }}
            return TotalNetSales;
          }
          const TotalNetSales = calculateNetSales(data?.sales);
       

function compareFromLastMonth(totalCurrentcheck,totalLastcheck) {
  let DifferSales = 0;
  DifferSales=totalCurrentcheck-totalLastcheck
  let percent =  DifferSales.toFixed(2)/totalLastcheck.toFixed(2) *100
  return percent;
}

const TotalSalesPercent = compareFromLastMonth(TotalGrossSales,LastTotalGrossSales);
const TotalRefundPercent = compareFromLastMonth(TotalRefundSales,LastTotalRefundSales);
const TotalOrdersPercent = compareFromLastMonth(TotalOrderCount,LastTotalOrderCount);


function  futurePrediction(Currentcheck,Lastcheck) {
  let DifferSales = 0;
  DifferSales=Lastcheck+Currentcheck
  let percent =  DifferSales/2
  return percent;
}
const TotalNetSalesFuture = futurePrediction(TotalGrossSales,LastTotalGrossSales);


// function futurePredictPrecent(totalCurrentcheck,totalLastcheck) {

//   let DifferSales = 0;
  
//   DifferSales=totalCurrentcheck-totalLastcheck

//   let percent =  DifferSales.toFixed(2)/totalLastcheck.toFixed(2) *100

//   return percent;
// }

  return (
    <>
      <Portal>
        <Box>
          <Navbar 
        brandText={"Dashboard"}
        {...props}
        {...{
          loading,
          setLoading,setLastData,lastData,reloadingPrev,setReloadingPrev,Lastloading,setLastLoading,
          data,dateRange,
          setData,
          storeData,
          setStoreData,
          selectStore,
          setSelectStore,orderData,setOrderData,hourlyData,setHourlyData,isLoading,reloading,setReLoading
        }}/>
        </Box>
      </Portal>

   

    
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

       {reloading? 
       <Grid style={{
        display: "flex",
        height:"80vh",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
       }}>
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
<Typography>
  Loading
</Typography>
       </Grid>
     : 
       <> 
        <Grid
          container
          sm={12}
          md={12}
          lg={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid sm={12} md={7} lg={7}>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2, "2xl": 6 }}
              gap="20px"
              mb="20px"
            >
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdBarChart}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Total Revenue"
                value={TotalGrossSales.toFixed(2)}
              />
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdAttachMoney}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Total Net Sales"
                value={TotalNetSales.toFixed(2)}
      
              />
              <MiniStatistics
                  startContent={
                    <IconBox
                      w="56px"
                      h="56px"
                      bg={boxBg}
                      icon={
                        <Icon
                          w="32px"
                          h="32px"
                          as={MdAttachMoney}
                          color={brandColor}
                        />
                      }
                    />
                  }
                  color={TotalSalesPercent>=0?"green.500":"red"}
              growth={TotalSalesPercent?.toFixed(2)+"%"} name="Sales MOM" value={(TotalGrossSales-LastTotalGrossSales)?.toFixed(2)} />


              <MiniStatistics
                // endContent={
                //   <Flex me="-16px" mt="10px">
                //     <FormLabel htmlFor="balance">
                //       <Avatar src={Usa} />
                //     </FormLabel>
                //     <Select
                //       id="balance"
                //       variant="mini"
                //       mt="5px"
                //       me="0px"
                //       defaultValue="usd"
                //     >
                //       <option value="usd">USD</option>
                //       <option value="eur">EUR</option>
                //       <option value="gba">GBA</option>
                //     </Select>
                //   </Flex>
                // }
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdAttachMoney}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Total Refund"
                color={TotalRefundPercent>=0?"green.500":"red"}
                growth={TotalRefundPercent?.toFixed(2)+"%"}
                value={TotalRefundSales.toFixed(2)}
              />
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                    icon={
                      <Icon w="28px" h="28px" as={MdAddTask} color="white" />
                    }
                  />
                }
                name="Total Transaction"
                color={TotalOrdersPercent>=0?"green.500":"red"}
                growth={TotalOrdersPercent?.toFixed(2)+"%"}
                value={TotalOrderCount}
              />
              <MiniStatistics
                startContent={
                  <IconBox
                    w="56px"
                    h="56px"
                    bg={boxBg}
                    icon={
                      <Icon
                        w="32px"
                        h="32px"
                        as={MdFileCopy}
                        color={brandColor}
                      />
                    }
                  />
                }
                name="Future Sales Predection"
                value={TotalNetSalesFuture.toFixed(2)}
              />
            </SimpleGrid>
          </Grid>
          <Grid style={{ display: "contents" }} sm={12} md={5} lg={5}>
            <MiniCalendar
              style={{
                display: "flex",
                alignContent: "center",
                flexWrap: "wrap",
              }}
              {...props}
              {...{
                handleDateChange,
                dateRange,
              }}
              minW="40%"
              selectRange={true}
            />
          </Grid>
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <TotalSpent salesData={data} lastData={lastData}/>
          <WeeklyRevenue  salesData={hourlyData} />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={data.sales}
            salesData={orderData}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <DailyTraffic salesData={data}/>
            <PieCard  salesData={data}  />
          </SimpleGrid>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <Tasks salesData={orderData} />
            {/* <MiniCalendar h="100%" minW="100%" selectRange={true} /> */}
               <Category salesData={orderData} />
          </SimpleGrid>
        </SimpleGrid>
        </>}
      </Box>


    </>
  );
}
