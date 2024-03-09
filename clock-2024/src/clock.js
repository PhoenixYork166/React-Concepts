import React, { useState, useEffect } from 'react';


function Clock({ time }) {
    const [className, setClassName] = useState('');

    useEffect(() => {
        const hours = time?.getHours();

        if (hours >= 0 && hours <= 6) {
          setClassName('night');
        } else {
          setClassName('day');
        }
    }, [time]);

    
    return (
      <h1 className={className} id="time">
        {time?.toLocaleTimeString()}
      </h1>
    );
  }
  
  export default Clock;