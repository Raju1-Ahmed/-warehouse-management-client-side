import React, { useEffect, useState } from 'react';
import ShowDress from './ShowDress';

const ShowAlldress = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://still-journey-93774.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
        <h2 className='text-warning  text-center mt-5'>All Dresses...</h2>
        <div className="row">
           {
                    products.map(product => <ShowDress
                        key={product._id}
                        product={product}
                    />)
                }
        </div>
    </div>
    );
};

export default ShowAlldress;