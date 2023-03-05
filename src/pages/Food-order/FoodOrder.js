import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMealsValue } from "../../stores/Meals";
import axios from "axios";
import { setTablesValue } from "../../stores/Tables";
import { setServersValue } from "../../stores/Servers";

const FoodOrder = () => {
  const meals = useSelector((state) => state.meals.value);
  const dispatch = useDispatch();

  const tables = useSelector((state) => state.tables.value);
  const servers = useSelector((state) => state.servers.value);

  const [orderItems, setOrderItems] = useState([]);
  const [server, setServer] = useState("");
  const [table, setTable] = useState("");
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const resMeals = await axios.get("http://localhost:3001/meals");
        dispatch(setMealsValue(resMeals.data));
        const resTables = await axios.get("http://localhost:3001/tables");
        dispatch(setTablesValue(resTables.data));
        const resServers = await axios.get("http://localhost:3001/servers");
        dispatch(setServersValue(resServers.data));
      } catch (error) {
        console.log(error);
      }
    };

    getDatas();
  }, []);

  // console.log(orderItems);

  const addOrderItem = (e, meal) => {
    e.preventDefault();
    const mealExist = orderItems.find((item) => item.name === meal.name);
    if (mealExist) {
      setOrderItems(
        orderItems.map((item) => {
          return item.name === mealExist.name
            ? {
                ...mealExist,
                quantity: mealExist.quantity + 1,
                startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
              }
            : item;
        })
      );
    } else {
      setOrderItems([
        ...orderItems,
        {
          ...meal,
          quantity: 1,
          price: meal.price,
          startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      ]);
    }
  };

  // console.log(tables);

  const removeOrderItem = (e, meal) => {
    e.preventDefault();
    const mealExist = orderItems.find((item) => item.name === meal.name);
    if (mealExist.quantity === 1) {
      setOrderItems(orderItems.filter((item) => item.name !== meal.name));
    } else {
      setOrderItems(
        orderItems.map((item) => {
          return item.name === meal.name
            ? {
                ...mealExist,
                quantity: mealExist.quantity - 1,
                startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
              }
            : item;
        })
      );
    }
  };

  const handleTableChange = (e) => {
    setTable(e.target.value);
  };

  const handleServerChange = (e) => {
    setServer(e.target.value);
  };

  useEffect(() => {
    setTotalValue(
      orderItems.reduce(
        (curValue, obj) => curValue + obj.price * obj.quantity,
        0
      )
    );
  }, [orderItems]);

  const orderFood = async (e) => {
    e.preventDefault();

    if (orderItems.length !== 0 && server && table) {
      try {
        const res = await axios.post("http://localhost:3001/orders", {
          table: table,
          server: server,
          status: "Sonlanib",
          bill: totalValue,
          startDate: `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          meals: orderItems,
        });
        console.log(res.data);

        setTable("");
        setServer("");
        setTotalValue(0);
        setOrderItems([]);
        alert('Sifarişinizi qeydə aldıq!');
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(
        "Zəhmət olmasa, sifariş etmək istədiyiniz yeməkləri, xidmətçini və masanı seçin."
      );
    }
  };

  return (
    <section className="section-food-order">
      <div className="container">
        <h1 className="heading-primary">Yemək sifariş edin</h1>

        <form>
          {meals.map((meal) => {
            const orderItem = orderItems.find(
              (item) => item.name === meal.name
            );
            return (
              <div className="meal-container" key={meal.id}>
                <div className="meal-info">
                  <img src={meal.img} alt={meal.name} />
                  <div className="meal-info-text">
                    <h3>{meal.name}</h3>
                    <p className="meal-description">{meal.description}</p>
                    <p className="meal-price">{meal.price} AZN</p>
                  </div>
                </div>
                <div className="meal-amount">
                  <button
                    className="btn-increment"
                    onClick={(e) => addOrderItem(e, meal)}
                  >
                    +
                  </button>
                  <p className="quantity">
                    {orderItem ? orderItem.quantity : 0}
                  </p>
                  <button
                    className="btn-decrement"
                    onClick={(e) => removeOrderItem(e, meal)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}

          <div className="order-table-server">
            <div className="order-table">
              <label htmlFor="tables">Masanı seçin:</label>
              <select
                defaultValue="Masa"
                name="tables"
                id="tables"
                onChange={handleTableChange}
                required
              >
                <option disabled value="Masa">
                  Masa
                </option>
                {tables.map((table) => {
                  return (
                    <option key={table.id} value={table.name}>
                      {table.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="server-table">
              <label htmlFor="servers">Xidmətçini seçin:</label>
              <select
                defaultValue="Xidmətçi"
                name="servers"
                id="servers"
                onChange={handleServerChange}
                required
              >
                <option disabled value="Xidmətçi">
                  Xidmətçi
                </option>
                 
                {servers.map((server) => {
                  return (
                    <option key={server.id} value={server.name}>
                      {server.name} {server.surname}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {orderItems.length !== 0 ? (
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>Sıra Sayı(S/S)</th>
                    <th>Miqdarı</th>
                    <th>Məbləğ</th>
                    <th>Sifariş tarixi</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((order, index) => {
                    return (
                      <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.quantity}</td>
                        <td>{order.quantity * order.price}</td>
                        <td>{order.startTime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : null}
          <div className="total-value-order-btn">
            <p>
              Cəmi Məbləğ: <span>{totalValue ? totalValue : 0} AZN</span>
            </p>
            <button className="btn btn--full" type="submit" onClick={orderFood}>
              Sifarişi Bitir!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FoodOrder;
