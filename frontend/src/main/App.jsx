import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';
import Logo from '../components/templates/Logo';
import Footer from '../components/templates/Footer';
import Nav from '../components/templates/Nav';

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>
