import React from 'react';
import werehousebg from '../../../image/Banner/Warehous.jpg'


const Export = () => {
    return (
        <div className='row'>
            <h2 className='d-inline mt-5 mx-auto clr'>transforming warehouses & distribution</h2>
            <div className='col-lg-6 mt-3 nmstyle'>
                <h2>At Ryder, we’re transforming warehouses & distribution centers to drive value and customer satisfaction.</h2>
                <p><span>Get ahead of challenges with flexible warehousing and distribution solutions to meet your customers’ demands. At Ryder, our industry-leading solutions include dedicated and multiclient warehousing, process engineering for continuous improvement, facility design, equipment, labor management, automation technology, and visibility tools to help you improve efficiency and optimize your operations.</span></p>
            </div>
            <div className='col-lg-6 mt-2 '>
                <img width={450} height={350} src={werehousebg} alt="" />
            </div>
        </div>
    );
};

export default Export;