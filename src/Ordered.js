import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Seperator from './components/Seperator';
import Button from '@mui/material/Button';

function Ordered(){
    const productname = useSelector(state => state.productname);
    const productprice = useSelector(state => state.productprice);

    return(
        <div className='Ordered'
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div className='Ordered_header'>
                <div class="pt-5"></div>
                <div class="pt-5"></div>
                <div class="pt-4"></div>
                <p class="pt-5"
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '30px',
                    
                    }}
                >
                    주문 완료!
                </p>
                <p
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '60px',
                    
                    }}
                >
                    👨‍🍳
                </p>
                <p class ="pt-0"
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        color: '#787878',
                    
                    }}
                >
                    곧 맛있는 음식을 준비할게요.
                </p>
                </div>
                {/*
                <div className='Ordered_body'>
                <p class="ps-4"
                    style={{
                        textAlign: 'start',
                        fontWeight: 'bold',
                        margin: '0',
                        paddingTop: '20px',
                        fontSize: '20px',
                    }}
                >
                    주문 상세:
                </p>
                <div class="pt-2"></div>

                <div 
                class="pt-1"
                style={{
                    textAlign: 'start',
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    
                   
                 }}>
                    <p class="ps-4"
                    style={{
                      
                        fontWeight: 'bold',
                        margin: '0',
                        fontSize: '15px',
                    }}
                        >
                            {productname}
                    </p>
                    <p
                    style={{
                        alignItems: 'end',
                        fontWeight: 'bold',
                        paddingLeft: '200px',
                        fontSize: '15px',
                    }}
                        >
                            {productprice}
                    </p>

                </div>
                <div style={{
                    textAlign: 'start',
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                   
                 }}>
                    <p class="ps-4"
                    style={{
                      
                        fontWeight: 'bold',
                        margin: '0',
                        
                        fontSize: '15px',
                    }}
                        >
                            {productname}
                    </p>
                    <p
                    style={{
                        alignItems: 'flex-end',
                        fontWeight: 'bold',
                        margin: '0',
                        paddingLeft: '200px',
                        fontSize: '15px',
                    }}
                        >
                            {productprice}
                    </p>

                </div>
   
        
            <div style={{ marginTop: '20px' }}></div>
            <div style={{
                    textAlign: 'start',
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    paddingTop: '10px',
                   
                 }}>
                    <p class="ps-4"
                    style={{
                      
                        fontWeight: 'bold',
                        margin: '0',
                        fontSize: '15px',
                    }}
                        >
                            총 결제 금액:
                    </p>
                    <p
                    style={{
                        alignItems: 'flex-end',
                        fontWeight: 'bold',
                        margin: '0',
                        paddingLeft: '200px',
                        fontSize: '15px',
                    }}
                        >
                            ₩ 58000
                    </p>

                </div>
                </div>
                */}
                <p class="pt-1"
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        margin: '0',
                        paddingTop: '5px',
                        fontSize: '18px',
                        color: '#787878',
                    
                    }}
                >
                    결제는 다 드신 후 카운터에서 부탁드립니다!
                </p>
                <div class="pt-2"></div>
                <Button
                href="/"
                variant="contained"
                style={{width: '240px'}}
                sx={{m:1}}>
                    메뉴판으로 돌아가기
                </Button>
        
   


        
        </div>
    );

}

export default Ordered;