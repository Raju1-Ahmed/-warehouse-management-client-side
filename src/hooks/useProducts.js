import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProducts = () => {
    const { productId } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://still-journey-93774.herokuapp.com/service/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);
return [products, setProducts]
};

export default useProducts;