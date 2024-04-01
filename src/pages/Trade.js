import { useEffect, useState } from "react";

// api
import { getPriceAPI, getPriceHistoryAPI } from "../api/binance";

// components
import ChartFilter from "../components/trade/ChartFilter";
import ApexChart from "../components/trade/ApexChart";
import Orders from "../components/trade/Orders";

// utils
import { getLast24HoursRange } from "../utils/dataRange";
import { changeHistoryData } from "../utils/trade";

// style
import "../components/styles/pages/trade.scss";

const Trade = () => {
  const [priceHistory, setPriceHistory] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [selectedFilters, setSelectedFilter] = useState({
    symbol: "BTCUSDT",
    interval: "1h",
    ...getLast24HoursRange(),
    limit: 900,
  });

  useEffect(() => {
    const getPrices = async () => {
      try {
        const [price, priceHistory] = await Promise.all([
          getPriceAPI({ symbol: selectedFilters.symbol }),
          getPriceHistoryAPI(selectedFilters),
        ]);
        setCurrentPrice(parseFloat(price.data.price));
        const resHistory = changeHistoryData(priceHistory.data);
        setPriceHistory(resHistory);
      } catch (err) {
        console.log(err);
      }
    };
    getPrices();

    const intervalId = setInterval(getPrices, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedFilters]);

  if (!priceHistory) return;

  return (
    <div className="trade-page">
      <h1>BTC/USDT: {currentPrice}</h1>

      <div className="chart-block">
        <ChartFilter setSelectedFilter={setSelectedFilter} />

        <ApexChart data={priceHistory} title="USDT/BTC" />
      </div>
      <div className="orders-block">
        <Orders price={currentPrice} />
      </div>
    </div>
  );
};

export default Trade;
