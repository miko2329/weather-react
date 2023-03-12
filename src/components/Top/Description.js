import React from 'react';

const Description = ({data}) => {
    return (
        <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
    );
};

export default Description;