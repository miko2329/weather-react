import React from 'react';

const Feels = ({data}) => {
    return (
        <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
        </div>
    );
};

export default Feels;