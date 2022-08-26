import React from 'react';
import {useParams} from 'react-router-dom';
import Advertisements from '../Components/Delivery/Advertisements';
import Delivery from '../Components/Delivery/index';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';

function HomePage() {
  const {type} = useParams();
  return (
   <>
   <div className='my-5'>
       {type === "delivery" && <Advertisements/>}
       {type === "delivery" && <Delivery/>}
       {type === "dining" && <Dining/>}
       {type === "night" && <NightLife/>}
       {type === "nutri" && <Nutrition/>}
   </div>
   </>
  )
}

export default HomePage;