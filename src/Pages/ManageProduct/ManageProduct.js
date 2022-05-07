import React from 'react';
import useService from '../../hooks/useService';

const ManageProduct = () => {
    const [products, setProducts] = useService();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(service => service._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
        <h2>Manage your services</h2>
        {
            products.map(product => <div key={product._id}>
                <h5>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                
            </div>)
        }
    </div>
    );
};

export default ManageProduct;