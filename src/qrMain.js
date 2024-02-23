import React from 'react';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import resimage from './image/resimage.png'
import pastaimage from './image/pastaimage.png'

function QrMain() {
    const description = useSelector(state => state.description);
    const description2 = useSelector(state => state.description2);

    return (
        <div className='QrMain'>
            <div class="mt-1"></div>
            <div>
                <img
                    src={resimage}
                    alt='resimage'
                    style={{ width: '100vw', height: '30vh', objectFit: 'cover' }}
                />
            </div>
            {/* 가게이미지 */}
            <div
                class = "m-1"
                style={{
                    height: '120px',
                    borderRadius: '15px',
                    backgroundColor: 'white',
                    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
              
                    
                }}
            >
                <p
                    style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        paddingTop: '15px',
                        paddingLeft: '15px',
                    }}
                >
                    {description}
                </p>
                <p
                    style={{
                        textAlign: 'left',
                        paddingTop: '1px',
                        paddingLeft: '15px',
                    }}
                >
                    {description2}
                </p>
            </div>
        </div>
    );
}

export default QrMain;