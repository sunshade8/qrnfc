import React from 'react';
import './App.css';
import BottomBar from './bottomBar';
import QrMain from './qrMain';
import ProductCard from './productCard';
import CartPage from './cartpage';
import Info from './Info';
import Blank from './components/Blank';

function Main() {
    return (
        <div className="Main"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
                
            }}
        >
            <QrMain></QrMain>
            <div class ="mt-2"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <ProductCard></ProductCard>
            <div class ="mt-1"></div>
            <Blank></Blank>
            <Info></Info>
            <BottomBar></BottomBar>
            <div style={{ marginTop: '20px' }}></div>
        </div>
    );
}

export default Main;
