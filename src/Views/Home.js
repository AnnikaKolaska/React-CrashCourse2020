import React from 'react';
import HelloWorld from '../Components/HelloWorld'

function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl">Home</h1>

            <HelloWorld name="Annika" />
        </div>
    );
}

export default Home;