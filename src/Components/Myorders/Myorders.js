import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Myorders.css'
const Myorders = () => {
    const {serviceId}= useParams();
    const [service,setService]= useState({});
    //   console.log(serviceId);
    useEffect(()=>{
        fetch(`https://creepy-vault-20977.herokuapp.com/services/${serviceId}`)
        .then(res =>res.json())
        .then(data => setService(data));
    },[])
   
    return (
        <div className="text-col">
            <h2>Detaits of Your Booking at :{service.name}</h2>
             <h5>
                 Here is our 5 night 6 days tour at {service.name}.
                 Total cost of this tour is {service.price} $.
                 This place is very beautiful for travel.Couple can enjoy extra 20% discount from us.So why late contract with us.We travel light! Our tour size, a maximum of 6 people*, offers flexibility and fosters camaraderie. It allows us to keep each day fresh and alive, to bypass crowded tourist destinations, to discover the hidden, authentic Italy, and to attend to your needs, moment to moment. La dolce vita is best when shared with others; it’s fun to get to know your traveling companions, to swap stories and laugh. Or put together your own group of friends and join us for an unforgettable journey!
             </h5>
             <h4>Address:</h4>
             <p>Anisur Rahman</p>
            
             <p>Zigatola,Dhanmondi,Dhaka 1200</p>
             
             <p>Effel Tower,Sat Masjid road</p>
             <button className="btn-col">Confrim Booking</button>
           
        </div>
    );
};

export default Myorders;