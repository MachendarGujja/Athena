import React from 'react';
import { CartData } from '../Context';
import Card from './Card';

const Cart = () => {
    const {main:{cart,search,button}} = CartData()
    const productFun=()=>{
      let newList = cart;
      if(button){
        newList = newList.filter((e)=>e.name.toLowerCase().includes(search))
      }
       if(!button){
        newList=cart;
       }
      return newList;
    }
  return (
    <div style={{width:'100%',height:'100%',minHeight:400,display:'flex',flexWrap:'wrap'}}>
    {productFun().length>0?productFun().map((e)=>(
        <Card data={e} key={e.id}/>
    )):<span>No Items</span>
    }</div>
  )
}

export default Cart