//import React, {useState} from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";   


function ItemCount ({stock, initial,onAdd}){

    const [count, setCount]= useState(initial);
 

    function handlePlusButton(){
        if (count < stock){
            setCount(count+1);
        }
    }

    function handleMinusPlusButton(){
        if (count < stock){
            setCount(count-1);
        }
        
    }

    return (
        <div className='item-count-container'>
            <div>
                <button onClick={() => handlePlusButton()}> + </button>
                <input readOnly value={count}/>
                <button onClick={() => handleMinusPlusButton()}> - </button>         
            </div>
            <Button onClick={()=> (count <= stock) && onAdd()}> Agregar al carrito </Button>       
        
        </div>
    )
}

export default ItemCount