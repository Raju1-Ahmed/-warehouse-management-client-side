import React, { useEffect, useState } from 'react';

const Dresses = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('clothingData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>How Much products: {products.length}</h2>
        </div>
    );
};

export default Dresses;