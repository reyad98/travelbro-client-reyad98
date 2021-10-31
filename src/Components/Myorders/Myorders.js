import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Myorders.css'
const Myorders = () => {
    const {serviceId}= useParams();
    const [service,setService]= useState({});
    //   console.log(serviceId);
    useEffect(()=>{
        fetch(`http://localhost:8000/services/${serviceId}`)
        .then(res =>res.json())
        .then(data => setService(data));
    },[])
   
    return (
        <div className="text-col">
            <h2>Detaits of Your Booking at :{service.name}</h2>
             <h5>
                 Here is our 5 night 6 days tour...
             </h5>
             <button className="btn-col">Confrim Booking</button>
           
        </div>
    );
};

export default Myorders;