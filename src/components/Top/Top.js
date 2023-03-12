import React from 'react';
import Location from "./Location";
import Temp from "./Temp";
import Description from "./Description";

const Top = ({data}) => {
    return (
        <div className="top">
            <Location data={data}/>
            <Temp data={data}/>
            <Description data={data}/>
        </div>
    );
};

export default Top;