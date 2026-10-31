import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext();

const Product = ({ children }) => {

    const [products, setProducts] = useState([]);


    const URL = "http://localhost:8080/api/products";



    useEffect(() => {
        axios
            .get("http://localhost:8080/api/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // const data = [
    //     {
    //         "id": 1,
    //         "name": "Faucibus metus blandit",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": null,
    //         "image": "backpack-1.jpg"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Fusce egestas odio",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": 5,
    //         "image": "backpack-2.jpg"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Efficitur tincidunt ornare",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": 5,
    //         "image": "backpack-3.jpg"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Laoreet nisi bibendum",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": null,
    //         "image": "backpack-4.jpg"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Vitae augue scelerisque",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": 5,
    //         "image": "backpack-5.jpg"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Class aptent taciti sociosqu",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": 4.5,
    //         "image": "backpack-6.jpg"
    //     },
    //     {
    //         "id": 7,
    //         "name": "Mauris malesuada odio",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": null,
    //         "image": "backpack-7.jpg"
    //     },
    //     {
    //         "id": 8,
    //         "name": "Maecenas varius maximus",
    //         "category": "Pet",
    //         "price": 50.00,
    //         "rating": null,
    //         "image": "backpack-8.jpg"
    //     }
    // ]

    return (
        <>
            <myContext.Provider value={{ products }} >
                {children}
            </myContext.Provider>
        </>
    )
}

export default Product
