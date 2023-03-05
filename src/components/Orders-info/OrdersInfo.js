import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrdersValue } from "../../stores/Orders";
import axios from "axios";
import { Link } from "react-router-dom";

const OrdersInfo = () => {
  const orders = useSelector((state) => state.orders.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/orders");
        dispatch(setOrdersValue(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    getOrders();
  }, []);

  return (
    <section className="section-orders-info">
      <div className="container">
        <h2 className="heading-secondary">
          Yemək sifarişləri barədə ümumi məlumat
        </h2>
        {orders.length !== 0 ? <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Sıra Sayı(S/S)</th>
                <th>Masa</th>
                <th>Xidmətçi</th>
                <th>Status</th>
                <th>Məbləğ</th>
                <th>Sifariş tarixi</th>
                <th>Ətraflı</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr
                    className={
                      order.status.toLowerCase() === "sonlanmayib"
                        ? "red-color"
                        : ""
                    }
                    key={order.id}
                  >
                    <td>{index + 1}</td>
                    <td>{order.table}</td>
                    <td>{order.server}</td>
                    <td>{order.status}</td>
                    <td>{order.bill}AZN</td>
                    <td>{order.startDate}</td>
                    <td>
                      <Link to={`/order/${order.id}`} className="btn btn--full">
                        Bax
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> : null}
        <div className="total-infos">
          <p>
            Ümumi sifariş sayı:
            <span>{orders.length}</span>
          </p>
          <p>
            Cəmi məbləğ:
            <span>
              {orders.reduce(
                (partialSum, current) => partialSum + current.bill,
                0
              )}
              AZN
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrdersInfo;
