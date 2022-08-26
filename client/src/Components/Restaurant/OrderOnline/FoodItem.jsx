import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

// Redux
// import { useDispatch, useSelector } from "react-redux";
// import { getFood } from "../../../Redux/Reducer/Food/food.action";
// import { getImage } from "../../../Redux/Reducer/Image/Image.action";
// import { addCart } from "../../../Redux/Reducer/Cart/cart.action";

function FoodItem(props) {
 
  // const reduxState = useSelector((globalStore) =>
  //   globalStore.cart.cart.filter((each) => each.id === props.id)
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (reduxState.length != 0) {
  //     setFood((prev) => ({ ...prev, isAddedToCart: true }));
  //   }
  // }, [reduxState]);

  // useEffect(() => {
  //   console.log(props);
  //   dispatch(getFood(props._id)).then((data) => {
  //     setFood(data.payload.foods);
  //     dispatch(getImage(data.payload.foods.photos)).then((data) => {
  //       const { images } = data.payload.image;
  //       images.length &&
  //         setFood((prev) => ({ ...prev, image: images[0].location }));
  //     });
  //   });
  // }, []);

  // const addFoodToCart = () => {
  //   dispatch(addCart({ ...food, quantity: 1, totalPrice: food.price }));
  //   setFood((prev) => ({ ...prev, isAddedToCart: true }));
  // };

  return (
    <>
      {props?.name && (
        <div className="flex items-start gap-2 py-2">
          {props?.image && (
            <div className="w-3/12 h-24 md:h-28 lg:h-36 md:px-3">
              <img
                src={props?.image}
                alt="food item"
                className="w-full h-auto md:h-full rounded-lg"
              />
            </div>
          )}
          <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{props?.name}</h3>
              <button
                className="md:hidden flex items-center gap-2 text-main-300 border border-main-300 bg-main-50 px-2 py-1 rounded-lg"
              >
                    <AiOutlinePlus /> Add

              </button>
            </div>
            <ReactStars count={5} value={props?.rating || 0} />
            <h5>$ {props?.price}</h5>
            <p className="truncate">{props?.description}</p>
          </div>
          <div className="hidden md:block w-2/12">
            <button
      
              className="flex items-center gap-2 text-main-300 border border-main-300 bg-main-50 px-2 py-1 rounded-lg"
            >
                  <AiOutlinePlus /> Add
              
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FoodItem;