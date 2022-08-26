import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

//HOC
import HomeLayoutHOC from './HOC/Home.HOC';
import RestaurantLayoutHOC from './HOC/Restaurant.HOC';

import Temp from './Components/Temp'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//PAGES
import HomePage from './Pages/Home';
import Overview from './Pages/Overveiw';
import OrderOnline from './Pages/OrderOnline';
import Reviews from './Pages/Reviews';
import Menu from './Pages/Menu';
import Photos from './Pages/Photos';
import CheckoutLayoutHOC from './HOC/Checkout.HOC';
import Checkout from './Pages/Checkout';


function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Navigate replace to="/delivery" />} />
    </Routes>
    <HomeLayoutHOC path='/:type' exact  component={HomePage}/>
    <RestaurantLayoutHOC path='/restaurant/:id' exact  component={Temp}/>
    <RestaurantLayoutHOC path='/restaurant/:id/overview' exact  component={Overview}/>
    <RestaurantLayoutHOC path='/restaurant/:id/order-online' exact  component={OrderOnline}/>
    <RestaurantLayoutHOC path='/restaurant/:id/menu' exact  component={Menu}/>
    <RestaurantLayoutHOC path='/restaurant/:id/reviews' exact  component={Reviews}/>
    <RestaurantLayoutHOC path='/restaurant/:id/photos' exact  component={Photos}/>
   <CheckoutLayoutHOC path='/checkout/orders'exact component={Checkout} />
   </>
  );
}

export default App;
