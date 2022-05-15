import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


function ItemDetail({item}) {
    const [cantidadDeProductos, setCantidadDeProductos]=useState(null)
    
    function addHandler(quantityToAdd){
        setCantidadDeProductos (quantityToAdd);
    }
    return (
    
        <div className="card">
    
        <div className='item-detail'>

            <div className='left'>

                <div className='img-detail-container'>
                    <img src={item?.image}/>
                </div>

            </div>

        </div>

        <div className='right'>
            <div className='info-container'>
                
                <h2>{item?.titulo}</h2>
                <p>{item?.precio}</p>

                <div className='count-container'>
                    <button><Link to='/cart'>Finalizar Compra ({cantidadDeProductos} items)</Link></button>
                    <ItemCount initial={0} stock={item.stock} onAdd={(addHandler)}/>
               
                </div>
            </div>
        </div>
        </div>
    )

}

export default ItemDetail