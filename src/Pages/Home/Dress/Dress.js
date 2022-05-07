import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dress.css'

const Dress = ({product}) => {
    const { _id,name, img, price, quantity, description} = product;

    const navigate = useNavigate()

    const handleOrder= id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className=' g-5 d-flex col-sm-12 col-md-6 col-lg-4'>
        <div className="card b bdr "  style={ { width: "18rem" }}>
        <img src={img} className="card-img-top" alt="" />
            <div className="card-body border-0">
                <h1 className="nmstyle">{name}</h1>
                <h5 className="nmstyle">Price: {price}$</h5>
                <h1 className="nmstyle">quantity: {quantity}</h1>
                <p className="nmstyle"><span>{description.substr(0, 90)}</span></p>
                <button className='nmstyle' onClick={()=> handleOrder(_id)}>Order: {name}</button>
            </div>
        </div>
    </div>
    
    );
};

export default Dress;