import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dress = ({product}) => {
    const { _id,name, img, price,supplier, quantity, description} = product;

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
                <h1 className="nmstyle">supplier: {supplier}</h1>
                <p className="nmstyle"><span>{description.substr(0, 90)}</span></p>
                <button className='px-5 py-2 nmstyle border' onClick={()=> handleOrder(_id)}>Order....</button>
            </div>
        </div>
    </div>
    
    );
};

export default Dress;