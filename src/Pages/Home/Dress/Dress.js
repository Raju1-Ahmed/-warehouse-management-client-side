import React from 'react';

const Dress = ({product}) => {
    const { id,name, img, price, description} = product;

    return (
        <div className=' g-5 d-flex col-sm-12 col-md-6 col-lg-4'>
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">Price: {price}$</h5>
                <p className="card-text">{description.substr(0, 90)}</p>
            </div>
        </div>
    </div>
    );
};

export default Dress;