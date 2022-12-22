import React from 'react'
import './Book.css'
import { Button } from '@mui/material';
import { CartData } from '../Context';
import DoneIcon from '@mui/icons-material/Done';

const Card = ({data}) => {
  const {
    main:{
        cart
    },
    dispatchMain} = CartData();
    console.log(cart)
  return (
    <div className='popular-card'>
        <div className='img' style={{marginLeft:10}}></div>
        <h4 style={{lineHeight: 1,margin:0,paddingLeft:10,paddingRight:5}}>{data.name}</h4>
        <p style={{lineHeight: 1,textAlign: 'justify',
  textAlignRight: 'right',paddingLeft:10,paddingRight:5}}>{data.text}</p>
        <div className='bot-card'>
            <div>
            <h4 style={{margin:0,marginRight:37}}>₹{data.price}</h4>
            <div style={{display:'flex',lineHeight: 1,margin:0}}>
            <p style={{paddingLeft:15,textDecoration:'line-through'}}>₹{data.actualPrice}</p>
            <p style={{paddingLeft:3,paddingRight:3,color:'green'}}>{data.discount} off</p>
            </div>
            </div>
            {cart.some((p)=>p.id === data.id)?
            <Button style={{marginLeft:40,paddingLeft:12,paddingRight:10,fontSize:12,border:'2px solid blue',color:'white',backgroundColor:'blue'}} onClick={()=>dispatchMain({type:'REMOVE_FROM_CART',payload:data,})}><DoneIcon/>Added</Button>:
            <Button style={{marginLeft:40,fontSize:12,border:'2px solid blue'}} onClick={()=>dispatchMain({type:'ADD_TO_CART',payload:data,})}>Add to cart</Button>}
        </div>
      </div>
  )
}

export default Card