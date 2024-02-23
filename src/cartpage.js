import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CartBottom from './CartBottom';
import './cartpage.css';
import './bottomBar.css';
import ProductCard from './productCard';

function CartPage(){
    return(
        <div className='CartPage'>   
            <div className='CartPage_header' 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
            >
                <IconButton 
                href="/"
                size = 'medium' 
                sx={{ m: 1, color: 'black', size: 'large' }} aria-label="add">
                    <ArrowBackIosNewIcon />
                </IconButton>
            </div>
            <div className='CartPage_body'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
               
                
            }}>
                <h1 style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                
                }}>장바구니</h1>
                <div style={{ marginTop: '20px' }}></div>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <CartBottom></CartBottom>
                
            </div>
            
         
            
        </div>
    );

}

export default CartPage;