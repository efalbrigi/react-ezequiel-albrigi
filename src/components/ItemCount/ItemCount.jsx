//import React, {useState} from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";   


function ItemCount ({stock, initial,onAdd}){

    const [count, setCount]= useState(initial);
 

    function handlePlusButton(){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function handleMinusButton(){
        if (count < stock){
            setCount(count - 1);
        }
        
    }

    return (
        <div className='item-count-container'>
            <div>
                <button onClick={() => handleMinusButton()}> - </button>
                <input readOnly value={count}/>
                <button onClick={() => handlePlusButton()}> + </button>         
            </div>
            <button onClick={()=> (count <= stock) && onAdd(count)}> Agregar al carrito </button>       
        
        </div>
    )
}

export default ItemCount