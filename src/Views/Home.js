import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HelloWorld from '../Components/HelloWorld'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard';

function Home() {
    const url = `https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(error => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    
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