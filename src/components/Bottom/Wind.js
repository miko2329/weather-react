import React from 'react';

const Wind = ({data}) => {
    return (
        <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} M/S</p> : null}
            <p>Wind Speed</p>
        </div>
    );
};

export default Wind;