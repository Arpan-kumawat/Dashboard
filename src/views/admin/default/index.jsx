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
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import { Grid } from "@material-ui/core";
import Navbar from "components/navbar/NavbarAdmin.js";

export default function UserReports(props) {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");



  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [storeData, setStoreData] = useState([]);

  const [selectStore, setSelectStore] = useState('');

  const [orderData, setOrderData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [isLoading] = useState(true);
  const [reloading, setReLoading] = useState(true);


          console.log(data);
          console.log(orderData);
          console.log(hourlyData);

  return (
    <>
      <Portal>
        <Box>
          <Navbar 
        brandText={"Dashboard"}
        {...props}
        {...{
          loading,
          setLoading,
          data,
          setData,
          storeData,
          setStoreData,
          selectStore,
          setSelectStore,orderData,setOrderData,hourlyData,setHourlyData,isLoading,reloading,setReLoading
        }}/>
        </Box>
      </Portal>

   
{reloading?"Loading":
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
                name="Earnings"
                value={data?.sales?.length}
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
                name="Spend this month"
                value="$642.39"
              />
              <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
              <MiniStatistics
                endContent={
                  <Flex me="-16px" mt="10px">
                    <FormLabel htmlFor="balance">
                      <Avatar src={Usa} />
                    </FormLabel>
                    <Select
                      id="balance"
                      variant="mini"
                      mt="5px"
                      me="0px"
                      defaultValue="usd"
                    >
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                      <option value="gba">GBA</option>
                    </Select>
                  </Flex>
                }
                name="Your balance"
                value="$1,000"
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
                name="New Tasks"
                value="154"
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
                name="Total Projects"
                value="2935"
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
              minW="40%"
              selectRange={true}
            />
          </Grid>
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <TotalSpent />
          <WeeklyRevenue />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <DailyTraffic />
            <PieCard />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <Tasks />
            <MiniCalendar h="100%" minW="100%" selectRange={true} />
          </SimpleGrid>
        </SimpleGrid>
      </Box>}


    </>
  );
}
