import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function getItem(id) {
    
  const myPromoise = new Promise ((resolve, reject) =>{
      
    /*const item={
        id: 1,
        image: "https://fondosmil.com/fondo/14642.jpg",
        titulo: "Hombre Araña",
        precio: "USD 50",
        stock: "4",
    }*/

    const ItemList = [
      {
        id: 1,
        image: "https://fondosmil.com/fondo/14642.jpg",
        title: "Hombre Araña",
        precio: "USD 50",
        stock: 10,
      },
      {
        id: 2,
        image: "https://fondosmil.com/fondo/14644.jpg",
        title: "SuperMan",
        precio: "USD 58",
        stock: 10,
      }
    ];
    
    const item= ItemList.filter(item =>item.id === parseInt(id));


    setTimeout (() => {
      resolve (item[0]);
    }, 2000);
  
  });

  return myPromoise;
}

function ItemDetailContainer (){

  const [item, setItem]=useState({});
  const {id} = useParams();

    useEffect (() =>{

      getItem(id)

        .then (res => {

          setItem(res)

        })
    },[id]);

    return(

      <div className='item-detail-container'>
        <ItemDetail item={item} />

      </div>
    )
      
};


export default ItemDetailContainer


