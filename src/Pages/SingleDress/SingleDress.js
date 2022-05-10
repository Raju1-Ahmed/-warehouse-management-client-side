import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import OrderDetails from './OrderDetails/OrderDetails';

const SingleDress = () => {
    const { productId } = useParams();
    const [service] = useProducts(productId);

    const [newItems, setNewItems] = useState([])
    const handleDecrement= () =>{
        console.log("chech");
    }
    return (
    <div className='row'>
            <div className=' g-5 d-flex mt-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card" style={{ width: "18rem" }}>
            <img src={service.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="nmstyle">{service.name}</h5>
                <h5 className="nmstyle">supplier: {service.supplier}</h5>
                <h5 className="nmstyle">Price: {service.price}$</h5>
                {/* <h5  className="card-title">Quantity: {service.quantity}</h5> */}

                <button onClick={() =>handleDecrement()} className='nmstyle border '>inc-:</button>
                <span className='border p-2'>{service.quantity}</span>
                <button className='nmstyle border '>:+dec</button>

                <button className='nmstyle px-3 mt-2 d-flex mx-auto border'>Update</button>
                 <p className="nmstyle">This is Service: {service.description}</p>
            </div>
        </div>
    </div>
    <OrderDetails></OrderDetails>
    </div>
    );
};

export default SingleDress;