import React from 'react';
import Navbar from './Navbar.js';
import Content from './Content';
import Feature from './Feature.js';
import Content1 from './Content1.js';
import Content2 from './Content2.js';
import Pricing from './Pricing.js';
import Footer from './Footer.js';
import Copyright from './Copyright.js';

function Home(props) {
    return (
        <div>
            <Navbar/> 
            <Content/>
            <Content1/>
            <Pricing/>
            <Content2/>
            <Feature/> 
            <Footer/>
            <Copyright/>
        </div>
    );
}

export default Home;