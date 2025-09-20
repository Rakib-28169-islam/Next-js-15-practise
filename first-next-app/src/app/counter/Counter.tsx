"use client";
import React from 'react';


const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            
        </div>
    );
};

export default Counter;