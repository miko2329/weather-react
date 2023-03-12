import React from 'react';

const Temp = ({data}) => {
    return (
        <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
    );
};

export default Temp;