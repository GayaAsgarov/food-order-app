import React from 'react';
import GeneralInfo from '../../components/General-info-section/GeneralInfo';
import OrdersInfo from '../../components/Orders-info/OrdersInfo';

const Home = () => {
  return (
    <div>
        <GeneralInfo />
        <OrdersInfo />
    </div>
  )
}

export default Home