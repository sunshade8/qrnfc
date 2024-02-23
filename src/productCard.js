import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import resimage from './image/resimage.png'
import pastaimage from './image/pastaimage.png'
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './animation.css'
function ProductCard(){
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
      };
    const productname = useSelector(state => state.productname);
    const productprice = useSelector(state => state.productprice);
    const [isAnimating, setIsAnimating] = useState(false);
    return(
        <div className='ProductCard' 
            class = "m-1"
            style={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                height: '130px',
                borderRadius: '15px',
                backgroundColor: 'white',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
                
            }}>{/*boxshadow 나중에 지울거*/}
            <img src={pastaimage} alt="ProductImage" 
            style={{ width: '130px', height: '130px', objectFit: 'cover', borderRadius:'15px', marginTop: '10px' }} />
            <div class = "pt-3">
                <div class = "ps-2"
                    style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        
                    }}
                >
                    <p class="pb-4">{productname}</p>
                </div>
                <div class= "pt-3"> </div>
                <div class= "ps-2"
                    style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        
        
                    }}
                >
                   <p class="pt-3">{productprice}</p> 
                </div>
            </div>

            <div style={{
                paddingLeft: '100px',
            }}>
            <IconButton 
            className={`plus-button ${isAnimating ? 'plus-button-animate' : ''}`}
            onClick={() => {
                handleAddToCart(productname);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 500); // Adjust timing based on your animation duration
              }}
            size = 'large' 
            sx={{color: 'black', size: 'large' }} 
            aria-label="add"
            
            >

                <AddCircleIcon />
            </IconButton>
            </div>
        
        </div>
    );
}

export default ProductCard;