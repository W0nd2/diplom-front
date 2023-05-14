import React from 'react';
import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;