import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrdersValue } from "../../stores/Orders";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetail = () => {
  let { id } = useParams();

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

  console.log(orders[id - 1]);

  return (
    <section className="section-order-detail">
      <div className="container">
        <h1 className="heading-primary">Sifariş haqqında məlumat</h1>
        <div className="order-detail-container">
          <div className="order-images">
            {orders[id - 1].meals.map((item, index) => {
              return <img key={index} src={item.img} alt={item.name} />;
            })}
          </div>
          <div className="order-text-content">
            {
              <p>
                <span>Sifariş olunan yeməklər:</span>{" "}
                {orders[id - 1].meals.map((item) => {
                  return `${item.quantity} x ${item.name}, `;
                })}
              </p>
            }
            <p>
              <span>Xidmətçi:</span> {orders[id - 1].server}
            </p>
            <p>
              <span>Sifariş Tarixi:</span> {orders[id - 1].startDate}
            </p>
            <p>
              <span>Status:</span> {orders[id - 1].status}
            </p>
            <p>
              <span>Masa:</span> {orders[id - 1].table}
            </p>
            <p className="prices">
              <span>Qiymətlər:</span>
              {orders[id - 1].meals.map((item, index) => {
                return (
                  <span key={index}>
                    {item.quantity} x {item.name} = {item.quantity} x {item.price} AZN = {item.quantity * item.price} AZN
                  </span>
                );
              })}
            </p>
            <p>
              <span>Cəmi Məbləğ:</span> {orders[id - 1].bill} AZN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;
