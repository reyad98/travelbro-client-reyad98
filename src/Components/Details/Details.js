

import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Showdetails from '../ShowDetails/Showdetails';

const Details = () => {
    const [news,setNews] = useState([])
  console.log(news);
    useEffect(()=>{
        fetch('./Details.json')
        .then(res=>res.json())
        .then(data =>setNews(data))
    },[])
    return (
        <div className="services">
             <Row xs={1} md={1} className="g-4">
              {
                 
                news?.map(first =><Showdetails
                    frist={first}
                ></Showdetails> )
              }
             </Row>
        </div>
    );

};

export default Details;