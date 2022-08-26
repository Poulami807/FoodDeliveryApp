//lg screen --> caraousel
//mobile screen --> cards/grid

import React,{useState} from 'react'
import RestaurantCard from '../RestaurantCard';
import DeliveryCarousel from './DeliveryCarousel';

function Delivery() {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
              'https://media-cdn.tripadvisor.com/media/photo-s/0f/de/a2/03/it-is-nice-place-to-have.jpg'
            ],
            name: "Chowman Kolkata",
            cuisine: ["Chinese", "Italian", "Indian"],
            isPro: false,
            isoff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
         },
         {
            _id: "12345",
            photos: [
              'https://media-cdn.tripadvisor.com/media/photo-s/0f/de/a2/03/it-is-nice-place-to-have.jpg'
            ],
            name: "Bakehouse Comfo:-t",
            cuisine: ["Chinese", "Italian", "Indian"],
            isPro: false,
            isoff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
         },
         {
            _id: "12456",
            photos: [
              'https://media-cdn.tripadvisor.com/media/photo-s/0f/de/a2/03/it-is-nice-place-to-have.jpg'
            ],
            name: "Bakehouse Comfo:-t",
            cuisine: ["Chinese", "Italian", "Indian"],
            isPro: false,
            isoff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
         },
    ]);
  return (
    <>
    <DeliveryCarousel/>
    <div className="flex justify-between flex-wrap my-10">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  )
}

export default Delivery;