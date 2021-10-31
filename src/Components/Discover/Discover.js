import React from 'react';
import './Discover.css'

const Discover = () => {
    return (
        <div>
            <div>
            <h2>Discover Us More</h2>
            </div>
            <div className="facebook">
                <h2>Facebook</h2>
                <h4>We have a facebook page.We engaged our patient buyer in facebook group.They can easily discussion any topic.We have online and offline course.</h4>
                <button className="buttnn">Facebook</button>
            </div>
            <div className="youtube">
                <h2>Youtube</h2>
                <h4>We have a Youtube channel.You can subscribe out channel for learn more.We have online and offline call service.</h4>
                <button className="buttnn">Youtube</button>
            </div>
            <div className="mail">
                <h2>Mail</h2>
                <h4>You can also contruct us by mail.We are always active to support you.Thank you.For getting our mail please click down</h4>
                <button className="buttnn">Email</button>
            </div>
        </div>
    );
};

export default Discover;