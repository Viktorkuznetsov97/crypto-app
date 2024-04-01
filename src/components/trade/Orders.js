import { useEffect, useState } from "react";
import dayjs from "dayjs";

// utils
import { createRandomOrder } from "../../utils/trade";

// icons
import ArrowUpIcon from "../icons/ArrowUpIcon";

// styles
import "../styles/trade/orders.scss";

const Orders = ({ price }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders((prev) => {
      const prevCopy = [...prev];
      prevCopy.unshift(createRandomOrder(price));
      return prevCopy;
    });
  }, [price]);

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Price</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.date} className={order.isSelling ? "sell" : "buy"}>
            <td>
              <div className="arrow">
                <ArrowUpIcon />
              </div>
            </td>
            <td>{dayjs(order.date).format("HH:mm:ss")}</td>
            <td>{order.price}</td>
            <td>{order.count}</td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Orders;
