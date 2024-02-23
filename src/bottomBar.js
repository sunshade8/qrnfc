import React from 'react';
import './bottomBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from "@mui/material/IconButton";
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';

function BottomBar(){
    const navigate = useNavigate();
    const totalprice = useSelector(state => state.totalprice);

    return(
        <div className='BottomBar' 
            style={{
                backgroundColor: 'white',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                height: '55px',
                borderRadius: '15px',
                margin: '10px',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', 
            }}
            >
            <div style ={{marginLeft: '10px',}}></div>
            <IconButton size = 'medium' sx={{color: 'black', size: 'large' }} aria-label="add">
                <ShoppingCartIcon />
            </IconButton>
            <div class ="mx-auto">
                    <p 
                    style={{textAlign:'left',fontWeight:'bold',paddingTop:'15px'}}
                    >
                        {totalprice}
                        </p>
            </div>
            <div style ={{paddingLeft: '120px',}}></div>
            
           	
    
            <Button
            href="/cartpage"
            variant="contained"
            style={{width: '120px'}}
            >
                장바구니
            </Button>
            <div style ={{marginRight: '10px',}}></div>
            

                    	
            
            	

            
        

            </div>
        
    );

}

export default BottomBar;