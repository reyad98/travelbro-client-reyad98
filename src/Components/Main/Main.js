import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Firstpart from '../Firstpart/Firstpart';
import './Main.css'

const Main = () => {
  const [news,setNews] = useState([])
  console.log(news);
    useEffect(()=>{
        fetch('./four.JSON')
        .then(res=>res.json())
        .then(data =>setNews(data))
    },[])
    return (
        
        <div className="services">

             <Row xs={1} md={2} className="g-4">
              {
                  news?.map(first => <Firstpart
                  frist={first}
                  ></Firstpart> )
              }
             </Row>
        </div>
    );
};

export default Main;