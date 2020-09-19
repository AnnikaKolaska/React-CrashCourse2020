import React, { useState, useEffect } from 'react'
import HelloWorld from '../Components/HelloWorld'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
    const url = `https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    let content = null


    if (products.loading) {
        content = <Loader />
    }

    if (products.error) {
        content = <p>
            There was an error. Please refresh or try later.
            The product(s) also might be missing.
        </p>
    }

    if (products.data) {
        content =
        products.data.map((product) =>
            <div key={product.id}>
                <ProductCard
                    product={product}
                />
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>

            {content}

            {/* <HelloWorld name="Annika" /> */}
        </div>
    );
}

export default Home;