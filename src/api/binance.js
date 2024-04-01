import axios from "axios";

export const getPriceHistoryAPI = async (params) =>
  axios.get("https://api.binance.com/api/v3/klines", {
    params,
  });

export const getPriceAPI = async (params) =>
  axios.get("https://api.binance.com/api/v3/ticker/price", {
    params,
  });
