import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import "./Style.css"
import React ,{useState,useEffect} from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth, value,color,text,bg } = props;
  const textColor = useColorModeValue("white", "white");
  const textColorSecondary = "white";

  const [changeValue, setChangeValue] = useState(false);
  const [changeAniation, setChangeAniation] = useState(false);

  const [prevNumber, setPrevNumber] = useState(value);
  const [currentNumber, setCurrentNumber] = useState(value);


  useEffect(() => {
    if (value !== currentNumber) {
      setPrevNumber(currentNumber);
      setCurrentNumber(value);   
      setChangeValue(true)
      setChangeAniation(true)
      setTimeout(() => setChangeAniation(false), 500);
    }
  }, [value, currentNumber]);


  console.log(prevNumber)
  console.log(currentNumber)


  return (
    <Card py='15px' style={{ background: bg }}
 >
      <Flex
        my='auto'
        h='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent}

        <Stat my='auto' ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}>
            {name}
          </StatLabel>

          <StatNumber
         className={ changeAniation?"fadeInUp-animation":""}
            color={textColor}
            fontSize={{
              base: "2xl",
            }}>
            {!changeValue? prevNumber :currentNumber}
          </StatNumber>


          {growth ? (
            <Flex align='center'>
              <Text color={color} fontSize='xs' fontWeight='700' me='5px'>
                {growth}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {text}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
