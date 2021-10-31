import React, { useEffect, useState } from 'react';
import Mypart from '../Mypart/Mypart';
import './Large.css'

const Large = () => {
    const [pic,setPic] = useState([])
 
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res=>res.json())
        .then(data =>setPic(data))
    },[])
    return (
        <div className="picsize">
            {
                pic.map(second=> <Mypart
                 me={second}
                 >
                </Mypart>)
            }
        </div>
    );
};

export default Large;