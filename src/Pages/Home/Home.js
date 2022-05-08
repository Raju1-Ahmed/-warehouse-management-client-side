import React from 'react';
import Banner from './Banner/Banner';
import Dresses from './Dresses/Dresses';
import Export from './ExportSection/Export';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Dresses></Dresses>
           <Export></Export>
        </div>
    );
};

export default Home;