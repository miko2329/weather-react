import React from 'react';
import Feels from "./Feels";
import Humidity from "./Humidity";
import Wind from "./Wind";

const Bottom = ({data}) => {
    return (
        <div className="bottom">
            <Feels data={data}/>
            <Humidity data={data}/>
            <Wind data={data}/>
        </div>
    );
};

export default Bottom;