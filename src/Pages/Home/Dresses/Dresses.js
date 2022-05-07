import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <h2 className='text-warning  text-center mt-5'>Dresses</h2>
        <div className="row">
           {
                    products.slice(0, 6).map(product => <Dress
                        key={product._id}
                        product={product}
                    />)
                }
        </div>
        
    <div>
        
        <Nav.Link as={Link} to="manage"><button className='mt-3 px-5 border'> See All</button></Nav.Link>
        
    </div>
    </div>
            
    );
};

export default Dresses;