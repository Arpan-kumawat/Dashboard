import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "assets/css/MiniCalendar.css";
import { Text, Icon } from "@chakra-ui/react";
// Chakra imports
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// Custom components
import Card from "components/card/Card.js";

export default function MiniCalendar(props) {

	const { handleDateChange,dateRange } = props;

  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());


  // const [dateRange, setDateRange] = useState([new Date(), new Date()]); // Initial date range

  // const handleDateChange = (dates) => {
  //   setDateRange(dates);
  //   console.log('Selected date range:', dates);
  // };


  return (
    <Card
      align='center'
      direction='column'
      w='100%'
      maxW='max-content'
      p='20px 15px'
      h='max-content'
      {...rest}>
      {/* <Calendar
             onChange={handleDateChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color='brand.500'></Text>}
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
      /> */}
         <Calendar
        selectRange
        prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
        nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}   
       onChange={handleDateChange}
        value={dateRange}
      />
    </Card>
  );
}
