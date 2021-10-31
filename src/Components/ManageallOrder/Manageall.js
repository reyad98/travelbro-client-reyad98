import React, { useEffect, useState } from 'react';
import './Manageall.css'
const Manageall = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://creepy-vault-20977.herokuapp.com/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[]);
    const handleDelet = id =>{
        const url = `https://creepy-vault-20977.herokuapp.com/services/${id}`;
        fetch(url,{
            method :'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Are You Sure To delete?')
                const remainData = services.filter(service =>service._id != id);
                setServices(remainData);
            }
            
        })
    }
    return (
        <div className="text-col">
            <h2>Manage All Orders</h2>
            {
                services.map(service => <div  key={service._id}>
                   <div >
                   <h3>
                       {service.name}
                   </h3>
                   <button className="btn-col" onClick={()=>handleDelet(service._id)}>Delete</button>
                   </div>
                </div>)
            }
        </div>
    );
};

export default Manageall;