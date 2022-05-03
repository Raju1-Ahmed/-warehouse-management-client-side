import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDress = () => {
    const { productId } = useParams();
    const [service, setService] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/service/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [])
    return (
        <div className=' g-5 d-flex mt-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card" style={{ width: "18rem" }}>
            <img src={service.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <h5 className="card-title">Price: {service.price}$</h5>
                <h5 className="card-title">Quantity: {service.quantity}</h5>
                {/* <p className="card-text">{service.description.substr(0, 90)}</p> */}
            </div>
        </div>
    </div>
    );
};

export default SingleDress;