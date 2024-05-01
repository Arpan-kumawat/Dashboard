
function calculateGrossSales(data,SelectCurrency,currencyData) {
    let TotalGrossSales = 0;
    let TotalGrossSalesIndia = 0;
    let TotalGrossSalesUSA = 0;
    let changeAmount = 0;
    
    console.log(data);
    if (data && SelectCurrency && currencyData) {
      let storeCountryIndia = data.filter(
        (e) => e.store_details?.currencycode === "INR"
      );
      let storeCountryUSA = data.filter(
        (e) => e.store_details?.currencycode === "USD"
      );

      if (SelectCurrency === "USD") {
        for (const item of storeCountryIndia) {
          TotalGrossSalesIndia += item.total_gross_sale;
        }
        for (const item of storeCountryUSA) {
          TotalGrossSalesUSA += item.total_gross_sale;
        }
        changeAmount = TotalGrossSalesIndia / currencyData.INR;

        TotalGrossSales = changeAmount + TotalGrossSalesUSA;
      } else if (SelectCurrency === "INR") {
        for (const item of storeCountryIndia) {
          TotalGrossSalesIndia += item.total_gross_sale;
        }
        for (const item of storeCountryUSA) {
          TotalGrossSalesUSA += item.total_gross_sale;
        }
        changeAmount = TotalGrossSalesUSA * currencyData.INR;
        TotalGrossSales = changeAmount + TotalGrossSalesIndia;
      }
    }

    return TotalGrossSales;
  }

  function calculateNetSales(data,SelectCurrency,currencyData) {
    let TotalNetSales = 0;
    let TotalNetSalesIndia = 0;
    let TotalNetSalesUSA = 0;
    let changeAmount = 0;

    console.log(data);
    if (data && SelectCurrency && currencyData) {
      let storeCountryIndia = data.filter(
        (e) => e.store_details?.currencycode === "INR"
      );
      let storeCountryUSA = data.filter(
        (e) => e.store_details?.currencycode === "USD"
      );

      if (SelectCurrency === "USD") {
        for (const item of storeCountryIndia) {
          TotalNetSalesIndia += item.total_net_sale;
        }
        for (const item of storeCountryUSA) {
          TotalNetSalesUSA += item.total_net_sale;
        }
        changeAmount = TotalNetSalesIndia / currencyData.INR;

        TotalNetSales = changeAmount + TotalNetSalesUSA;
      } else if (SelectCurrency === "INR") {
        for (const item of storeCountryIndia) {
          TotalNetSalesIndia += item.total_net_sale;
        }
        for (const item of storeCountryUSA) {
          TotalNetSalesUSA += item.total_net_sale;
        }
        changeAmount = TotalNetSalesUSA * currencyData.INR;
        TotalNetSales = changeAmount + TotalNetSalesIndia;
      }
    }

    return TotalNetSales;
  }

  function calculateOrderCheck(data) {
    let TotalOrderCount = 0;
    if (data) {
      for (const item of data) {
        TotalOrderCount += item.orders;
      }
    }
    return TotalOrderCount;
  }

  function calculateRefundSales(data,storeData,SelectCurrency,currencyData) {
    let arr1=[]
    let arr = [];   
    let uniqueIndiaStore =[]
    let uniqueUSStore =[]

    console.log(storeData)
    if (storeData.length) {
        let storeCountryIndia =  (storeData?.filter((e) => e.store_currency === "INR"))
        arr = storeCountryIndia?.map((store) => store.store_id);
  
    let storeCountryUSA = storeData?.filter((e) => e.store_currency === "USD");
     arr1 = storeCountryUSA?.map((store) => store.store_id);
     
     let IndiaStore = data?.filter((obj) => arr.includes(obj.store_id));

    uniqueIndiaStore = IndiaStore?.reduce((acc, current) => {
        const x = acc.find(item => item.store_id === current.store_id);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
   
     let UsStore = data?.filter((obj) => arr1?.includes(obj.store_id));
     
    uniqueUSStore = UsStore?.reduce((acc, current) => {
        const x = acc.find(item => item.store_id === current.store_id);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    }

    let TotalRefundSales = 0;
    let TotalRefundSalesIndia = 0;
    let TotalRefundSalesUSA = 0;
    let changeAmount = 0;

    if (SelectCurrency === "USD" && uniqueIndiaStore) {
        for (const item of uniqueIndiaStore) {
          TotalRefundSalesIndia += item.refund;
        }
        for (const item of uniqueUSStore) {
          TotalRefundSalesUSA += item.refund;
        }
        changeAmount = TotalRefundSalesIndia / currencyData?.INR;

        TotalRefundSales = changeAmount + TotalRefundSalesUSA;
      } else if (SelectCurrency === "INR" && uniqueIndiaStore ) {
        for (const item of uniqueIndiaStore) {
          TotalRefundSalesIndia += item.refund;
        }
        for (const item of uniqueUSStore) {
          TotalRefundSalesUSA += item.refund;
        }
        changeAmount = TotalRefundSalesUSA * currencyData?.INR;
        TotalRefundSales = changeAmount + TotalRefundSalesIndia;
      }

    return TotalRefundSales;
  }
// last month/year refund pending


  function compareFromLastMonth(totalCurrentcheck, totalLastcheck) {
    let DifferSales = 0;
    DifferSales = totalCurrentcheck - totalLastcheck;
    let percent =0;
    if(DifferSales===0 || totalLastcheck===0){
        percent=0
    }else{
        percent = (DifferSales.toFixed(2) / totalLastcheck.toFixed(2)) * 100;
    }
    return percent;
  }

  function futurePrediction(Currentcheck, Lastcheck) {
    let DifferSales = 0;
    DifferSales = Lastcheck + Currentcheck;
    let percent = DifferSales / 2;
    return percent;
  }


export { calculateGrossSales ,calculateNetSales,calculateOrderCheck,
    calculateRefundSales,compareFromLastMonth,
    futurePrediction};