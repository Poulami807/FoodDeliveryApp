import React, { useEffect } from "react";
//components
import CheckoutNavbar from '../Components/Navbar/CheckoutNavbar';

// Redux
import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Reducer/Cart/cart.action";

function CheckoutLayout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
      <CheckoutNavbar />
      <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
    </>
  )
}

export default CheckoutLayout;