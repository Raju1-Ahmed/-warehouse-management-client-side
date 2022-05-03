import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dress = ({product}) => {
    const { _id,name, img, price, quantity, description} = product;

    const navigate = useNavigate()

    const handleOrder= id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className=' g-5 d-flex col-sm-12 col-md-6 col-lg-4'>
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">Price: {price}$</h5>
                <h5 className="card-title">Quantity: {quantity}</h5>
                <p className="card-text">{description.substr(0, 90)}</p>
                <button onClick={()=> handleOrder(_id)}>Order: {name}</button>
            </div>
        </div>
    </div>
    );
};

export default Dress;