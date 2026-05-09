import React, { useState } from 'react';

const BarCharts = () => {
    const[barData, setBarData] = useState([]);
    fetch("./App.json")
      .then((res) => res.json())
      .then((data) => setBarData(data));
      console.log(barData);
    return (
        <div>
            <p>Bar Charts</p>
        </div>
    );
};

export default BarCharts;