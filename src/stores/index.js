import { configureStore } from "@reduxjs/toolkit";

import ordersReducer from "./Orders";
import mealsReducer from "./Meals";
import tablesReducer from './Tables';
import serversReducer from './Servers';

export default configureStore({
  reducer: {
    orders: ordersReducer,
    meals: mealsReducer,
    tables: tablesReducer,
    servers: serversReducer,
  },
});
