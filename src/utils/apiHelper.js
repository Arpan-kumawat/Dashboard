import axios from 'axios';
import { GET_DAILY_SALES, GET_ORDERWISE_SALE, GET_HOURLY_SALE, GET_ALL_STORES } from './constant';

let optionAxios = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'x-api-source': 'webapp',
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzSW4iOjE3MDg2Nzg3Nzk4NzcsImRhdGEiOnsiZW1wX25vIjoiMzYwMDAwMDEiLCJlbXBzY3J0IjoiMTIzNDU2NzgiLCJzdG9yZV9pZCI6IjM2MDAifX0.9RLo_gwqIRkQHC9uFkcZWago_pWEKvakFQV_TbvqR_c'
  }
};

const GetDailySales = async (input) => {
  return await axios
    .post(GET_DAILY_SALES, input, optionAxios)
    .then(function (resp) {
      console.log(resp.data.data);
      return resp.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
const GetOrderWiseSales = async (input) => {
  return await axios
    .post(GET_ORDERWISE_SALE, input, optionAxios)
    .then(function (resp) {
      console.log(resp.data.data);
      return resp.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetHourlySales = async (input) => {
  return await axios
    .post(GET_HOURLY_SALE, input, optionAxios)
    .then(function (resp) {
      console.log(resp.data.data);
      return resp.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const GetStores = async (input) => {
  return await axios
    .post(GET_ALL_STORES, input, optionAxios)
    .then(function (resp) {
      console.log(resp.data.data);
      return resp.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { GetDailySales, GetOrderWiseSales, GetHourlySales, GetStores };
