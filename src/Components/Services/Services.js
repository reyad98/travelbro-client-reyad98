import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Choise from '../Choise/Choise';
import './Services.css'

const Services = () => {
    const [news,setNews] = useState([])
  //console.log(news);
    useEffect(()=>{
        fetch('http://localhost:8000/services')
        .then(res=>res.json())
        .then(data =>setNews(data))
    },[])

    //handlesub 
         const handleCart = (service) =>{
           console.log(service.name);
         }
    //ok
    return (
        <div className="services">
             <Row xs={1} md={3} className="g-4">
              {
                  news?.map(service => <Choise
                    key={service.id}
                    service={service}
                    //ok
                    handleCart ={handleCart}
                    //ok
                  ></Choise> ) 
              }
             </Row>
        </div>
    );
};

export default Services;