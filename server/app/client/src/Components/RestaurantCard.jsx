import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

// Redux
import { useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/image.action";

function RestaurantCard(props) {
  const [image, setImage] = useState({
    images: [],
  });
  const [isPro] = useState(true);
  const [isOff] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) =>{
        setImage(data.payload.image)
        console.log(data.payload.image);
      }
      );
  }, [props.photos]);
  
  return (
    <Link to={`/restaurant/${props._id}`} className="w-full md:w-1/2 lg:w-1/3">
      <div className="bg-white p-4 mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg ">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex items-start flex-col gap-2">
              {props.isPro && (
                <span className="bg-main-400 text-white px-2 py-1 rounded text-sm">
                  Pro extra 10% off
                </span>
              )}

              {props.isOff && (
                <span className="bg-main-600 text-white px-2 py-1 rounded text-sm">
                  $20 OFF
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded mr-3">
              {/* {props.durationOfDelivery} min */}
              30 min
            </span>
          </div>
          <img
            src={image.images.length && image.images[0].location}
            alt="food"
            className="w-full h-full rounded-2xl object-center object-cover"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.name}</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
              {/* {props.restaurantReviewValue} */}4.2<AiTwotoneStar /> 
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>{props.cuisine.join(", ")}</p>
            <p>${props.averageCost} for one </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;