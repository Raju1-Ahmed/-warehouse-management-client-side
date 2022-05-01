import React, { useEffect, useState } from 'react';
import Dress from '../Dress/Dress';

const Dresses = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
        <h2 className='text-primary text-center mt-5'>Dresses</h2>
        <div className="row">
           {
                    products.map(product => <Dress
                        key={product.id}
                        product={product}
                    />)
                }
        </div>
    </div>
            
    );
};

export default Dresses;