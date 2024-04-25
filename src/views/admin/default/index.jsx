/*!
           __  _  _   _____ _    _ _____ ___ 
     /\   |  __ \| |  | |/ ____| |  | |_   _|
    /  \  | |__) | |  | | (___ | |__| | | |  
   / /\ \ |  _  /| |  | |\___ \|  __  | | |  
  / ____ \| | \ \| |__| |____) | |  | |_| |_ 
 /_/    \_\_|  \_\\____/|_____/|_|  |_|_____|
                                                                                                                                                                                                                                                                                                                                   
=========================================================
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
import React, { useState, useEffect } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdCurrencyRupee,
  MdFileCopy,
} from "react-icons/md";

import {
  calculateGrossSales,calculateNetSales,calculateOrderCheck
  ,calculateRefundSales,compareFromLastMonth,futurePrediction
} from "./calculations";

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
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import { Grid, Typography } from "@material-ui/core";
import Navbar from "components/navbar/NavbarAdmin.js";
import { Spinner } from "@chakra-ui/react";

export default function UserReports(props) {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  var currencyDataString = localStorage.getItem("CurrencyRate");
  var currencyData = JSON.parse(currencyDataString);

  // const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  // const handleDateChange = (dates) => {
  //   setDateRange(dates);
  // };

  const [loading, setLoading] = useState(true);
  const [Lastloading, setLastLoading] = useState(true);

  const [currency, setCurrency] = useState("");
  const [YearMonth, setYearMonth] = useState("Month");


  const [data, setData] = useState([]);
  const [lastData, setLastData] = useState([]);
  const [aLLStoreData, setALLStoreData] = useState([]);
  const [storeData, setStoreData] = useState([]);

  const [selectStore, setSelectStore] = useState("ALL");
  const [SelectCurrency, setSelectCurrency] = useState("USD");

  const [orderData, setOrderData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [isLoading] = useState(true);
  const [reloading, setReLoading] = useState(true);
  const [reloadingPrev, setReloadingPrev] = useState(true);


  const formatCurrency = (value) => {
    const formattedValue = value.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      // style: "currency",
      currency: "INR",
    });
    return formattedValue;
  };

  // Order Count
  const TotalOrderCount = calculateOrderCheck(data?.sales);
  const LastTotalOrderCount = lastData?.length;
  const TotalOrdersPercent = compareFromLastMonth(TotalOrderCount,LastTotalOrderCount);

    // Refund data
  const TotalRefundSales = calculateRefundSales(data?.sales,storeData,SelectCurrency,currencyData);
  const LastTotalRefundSales = calculateRefundSales(lastData?.sales,storeData,SelectCurrency,currencyData);
  const TotalRefundPercent = compareFromLastMonth( TotalRefundSales,LastTotalRefundSales);

      // GrossSales data
  const TotalGrossSales = calculateGrossSales(orderData,SelectCurrency,currencyData);
  const LastTotalGrossSales = calculateGrossSales(lastData,SelectCurrency,currencyData);
  const TotalGrossSalesPercent = compareFromLastMonth(TotalGrossSales, LastTotalGrossSales);

        // NetSalse data
  const TotalNetSales = calculateNetSales(orderData,SelectCurrency,currencyData);
  const LastTotalNetSales = calculateNetSales(lastData,SelectCurrency,currencyData);
  const TotalNetSalesPercent = compareFromLastMonth( TotalNetSales, LastTotalNetSales );
 
  // NetSales Data Future
  const TotalNetSalesFuture = futurePrediction(TotalGrossSales,LastTotalGrossSales);

  return (
    <>
      <Portal>
        <Box>
          <Navbar
            brandText={"Dashboard"}
            {...props}
            {...{
              loading,setYearMonth,YearMonth,
              setSelectCurrency,
              SelectCurrency,
              setLoading,
              setLastData,
              lastData,
              reloadingPrev,
              setReloadingPrev,
              Lastloading,
              setLastLoading,
              data,
              // dateRange,
              setData,
              storeData,
              setCurrency,
              setALLStoreData,
              aLLStoreData,
              setStoreData,
              selectStore,
              setSelectStore,
              orderData,
              setOrderData,
              hourlyData,
              setHourlyData,
              isLoading,
              reloading,
              setReLoading,
            }}
          />
        </Box>
      </Portal>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {reloading ? (
          <Grid
            style={{
              display: "flex",
              height: "80vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Typography>Loading</Typography>
          </Grid>
        ) : (
          <>
            <Grid
              container
              sm={12}
              md={12}
              lg={12}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid sm={12} md={12} lg={12}>
                <SimpleGrid
                  columns={{ base: 1, md: 3, lg: 3, "2xl": 6 }}
                  gap="10px"
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
                            as={
                              SelectCurrency === "INR"
                                ? MdCurrencyRupee
                                : SelectCurrency === "USD"
                                ? MdAttachMoney
                                : ""
                            }
                            color={brandColor}
                          />
                        }
                      />
                    }
                    color={TotalGrossSalesPercent >= 0 ? "green.500" : "red"}
                    growth={TotalGrossSalesPercent?.toFixed(2) + "%"}
                    text={`since Last ${YearMonth}`}
                    name="Total Revenue"
                    value={ (SelectCurrency === "INR" ?  " ₹ ":" $ ")+formatCurrency(TotalGrossSales)}
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
                            as={
                              SelectCurrency === "INR"
                                ? MdCurrencyRupee
                                : SelectCurrency === "USD"
                                ? MdAttachMoney
                                : ""
                            }
                            color={brandColor}
                          />
                        }
                      />
                    }
                    color={TotalNetSalesPercent >= 0 ? "green.500" : "red"}
                    growth={TotalNetSalesPercent?.toFixed(2) + "%"}
                    text={`since Last ${YearMonth}`}
                    name="Total Net Sales"
                    value={(SelectCurrency === "INR" ?  " ₹ ":" $ ")+formatCurrency(TotalNetSales)}
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
                            as={
                              SelectCurrency === "INR"
                                ? MdCurrencyRupee
                                : SelectCurrency === "USD"
                                ? MdAttachMoney
                                : ""
                            }
                            color={brandColor}
                          />
                        }
                      />
                    }
                    // color={TotalGrossSalesPercent >= 0 ? "green.500" : "red"}
                    // growth={TotalGrossSalesPercent?.toFixed(2) + "%"}
                    name="Sales MOM"
                    value={formatCurrency(
                      TotalGrossSales - LastTotalGrossSales
                    )}
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
                            as={
                              SelectCurrency === "INR"
                                ? MdCurrencyRupee
                                : SelectCurrency === "USD"
                                ? MdAttachMoney
                                : ""
                            }
                            color={brandColor}
                          />
                        }
                      />
                    }
                    name="Total Refund"
                    text={`since Last ${YearMonth}`}
                    color={TotalRefundPercent >= 0 ? "green.500" : "red"}
                    growth={TotalRefundPercent?.toFixed(2) + "%"}
                    value={(SelectCurrency === "INR" ?  " ₹ ":" $ ")+ formatCurrency(TotalRefundSales)}
                  />

                  <MiniStatistics
                    startContent={
                      <IconBox
                        w="56px"
                        h="56px"
                        bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                        icon={
                          <Icon
                            w="28px"
                            h="28px"
                            as={MdAddTask}
                            color="white"
                          />
                        }
                      />
                    }
                    name="Total Transaction"
                    text={`since Last ${YearMonth}`}
                    color={TotalOrdersPercent >= 0 ? "green.500" : "red"}
                    growth={TotalOrdersPercent?.toFixed(2) + "%"}
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
                            as={
                              SelectCurrency === "INR"
                                ? MdCurrencyRupee
                                : SelectCurrency === "USD"
                                ? MdAttachMoney
                                : ""
                            }
                            color={brandColor}
                          />
                        }
                      />
                    }
                    name="Future Sales Prediction"
                    value={ (SelectCurrency === "INR" ?  " ₹ ":" $ ")+formatCurrency(TotalNetSalesFuture)}
                  />
                </SimpleGrid>
              </Grid>
              {/* <Grid style={{ display: "contents" }} sm={12} md={5} lg={5}>
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
              </Grid> */}
            </Grid>

            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 2 }}
              gap="20px"
              mb="20px"
            >
              <TotalSpent salesData={data} lastData={lastData} />
              <WeeklyRevenue salesData={hourlyData} />
            </SimpleGrid>

            <SimpleGrid
              columns={{ base: 1, md: 1, xl: 2 }}
              gap="20px"
              mb="20px"
            >
              {/* <CheckTable
            columnsData={columnsDataCheck}
            tableData={data.sales}
            salesData={orderData}
          /> */}
              <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
                <Tasks salesData={orderData} />
                <PieCard salesData={data} />

              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
                <DailyTraffic salesData={data} />
     
                <Category salesData={orderData} />
              </SimpleGrid>
            </SimpleGrid>

            <SimpleGrid
              columns={{ base: 1, md: 1, xl: 2 }}
              gap="20px"
              mb="20px"
            >
              <ComplexTable
                columnsData={columnsDataComplex}
                tableData={storeData}
              />
              <CheckTable
                columnsData={columnsDataCheck}
                tableData={data.sales}
                salesData={orderData}
                Currency={currency}
                ALLStoreORDeR={aLLStoreData}
                SelectStore={selectStore}
              />
            </SimpleGrid>
             
          </>
        )}
      </Box>
    </>
  );
}
