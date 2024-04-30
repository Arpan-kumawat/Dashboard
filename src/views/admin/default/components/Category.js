import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function Category(props) {
  const { salesData } = props;
  const item = salesData.map((e) => e.item_details);

  const flattenedArray = item.flat();
  const categoryIds = flattenedArray.map((obj) => obj.item_name);
  const categoryCounts = {};
  categoryIds.forEach((id) => {
    categoryCounts[id] = (categoryCounts[id] || 0) + 1;
  });

  const sortedCategoryIds = Object.keys(categoryCounts).sort(
    (a, b) => categoryCounts[b] - categoryCounts[a]
  );
  const top5CategoryIds = sortedCategoryIds.slice(0, 5);

  console.log("Top 5 repeating category IDs:", top5CategoryIds);

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card p="20px" align="center" direction="column" w="100%">
      <Flex alignItems="center" w="100%" mb="30px">
        <Text color={textColor} fontSize="lg" fontWeight="700">
          Top 5 Selling Items
        </Text>
      </Flex>
      <Box px="11px">
        <ul class="b">
          {top5CategoryIds.map((e) => (
            <li>
              <Flex
                mb="20px"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Text
                  fontWeight="bold"
                  color={textColor}
                  fontSize="md"
                  textAlign="start"
                >
                  {e}
                </Text>
              </Flex>
            </li>
          ))}
        </ul>
      </Box>
    </Card>
  );
}
