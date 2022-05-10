import React from 'react';
import useService from '../../hooks/useService';
// import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setProducts] = useService();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://still-journey-93774.herokuapp.com/service/${id}`;
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
        <div className='col-sm-w-50 '>
            <h2>Manage your services</h2>
            {
                products.map(product => <div
                    key={product._id}>

                    <div className='d-flex '>
                        <img className=' mt-2 ' width={100} height={100} src={product.img} alt="" />
                        <h5 className='manageh2'> name: {product.name} <button className='mx-2 w-25  border btnBG' onClick={() => handleDelete(product._id)}>
                            <a>x</a>
                        </button></h5>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;