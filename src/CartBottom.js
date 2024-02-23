import React from 'react';
import './bottomBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from "@mui/material/IconButton";
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';

function CartBottom(){
    const navigate = useNavigate();
    const totalprice = useSelector(state => state.totalprice);

    return(
        <div className='CartBottom' 
            style={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                height: '55px',
                borderRadius: '15px',
                margin: '10px',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', 
            }}
            >
            <div style ={{paddingLeft: '20px',}}></div>
            <div style={{paddingTop:'15px'}}>
                <p style={{fontWeight:'bolder'}}>
                    결제 금액:
                </p>
            </div>
            <div class ="mx-auto">
                    <p 
                    style={{textAlign:'left',fontWeight:'bold',paddingTop:'15px'}}
                    >
                        {totalprice}
                        </p>
            </div>
            <div style ={{marginLeft: '90px',}}></div>
            
           	
    
            <Button
            href="/Ordered"
            variant="contained"
            style={{width: '120px'}}
            >
                주문하기
            </Button>
            <div style ={{marginRight: '10px',}}></div>
            

                    	
            
            	

            
        

            </div>
        
    );

}

export default CartBottom;