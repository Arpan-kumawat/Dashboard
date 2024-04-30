import React from "react";
import Card from "components/card/Card";
import ReactChart from "../ReactChart";

export default function CheckTable(props) {
  const { ALLStoreORDeR } = props;

  const AllStore = ALLStoreORDeR || [];

  console.log(ALLStoreORDeR);

  const sumByStoreId = {};

  //need to correct
  if (ALLStoreORDeR.length > 30) {
    AllStore?.forEach((item) => {
      if (sumByStoreId[item.store_details.store_id]) {
        sumByStoreId[item.store_details.store_id].total_net_sale +=
          item.total_net_sale;
        sumByStoreId[item.store_details.store_id].total_item_tax +=
          item.total_item_tax;
        sumByStoreId[item.store_details.store_id].total_discount +=
          item.total_discount;
        sumByStoreId[item.store_details.store_id].total_gross_sale +=
          item.total_gross_sale;
      } else {
        sumByStoreId[item.store_details.store_id] = {
          total_net_sale: item.total_net_sale,
          total_item_tax: item.total_item_tax,
          total_discount: item.total_discount,
          total_gross_sale: item.total_gross_sale,
        };
      }
    });
  }
  const netSalesArray = Object.entries(sumByStoreId).map(
    ([ storeId, { total_net_sale, total_item_tax, total_discount, total_gross_sale }]) => ({
      storeId: parseInt(storeId),
      total_net_sale,
      total_item_tax,
      total_discount,
      total_gross_sale,
    })
  );

  netSalesArray.sort((a, b) => b.total_net_sale - a.total_net_sale);

  const top5NetSales = netSalesArray.slice(0, 5);

  console.log(top5NetSales);

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <ReactChart Sales={top5NetSales} />
    </Card>
  );
}
