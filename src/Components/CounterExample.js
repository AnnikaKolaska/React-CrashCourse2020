import React, { useState } from 'react'

function CounterExample(){
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick= {() => setCount(count + 1)}>
                PLUS +
            </h1>
            <h1 onClick={() => setCount(count - 1)}>
                MINUS - 
            </h1>
        </div>

    )
}

export default CounterExample