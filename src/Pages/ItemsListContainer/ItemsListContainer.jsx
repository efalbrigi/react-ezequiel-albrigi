import React, { useEffect,useState } from 'react'
import Item from '../Item/Item';
import ItemList from '../intemList/itemList';
import './item-list-container.css'
import { useParams } from 'react-router';
import itemList from '../intemList/itemList';


function getItemList(category){
  const myPromise= new Promise((resolve,reject) =>{

    const ItemList =[

      {
        id: 1,
        image: "https://fondosmil.com/fondo/14642.jpg",
        title: "Hombre Araña",
        precio: "USD 50",
        stock: "4",
        category: 'superheroes',
      },
      {
        id: 2,
        image: "https://fondosmil.com/fondo/14644.jpg",
        title: "SuperMan",
        precio: "USD 58",
        stock: "10",
        category: 'villanos',
      }

    ];

    const productsFiltered= category ? ItemList.filter(p=> p.category === category) : ItemList;

    setTimeout(() =>{
      resolve (productsFiltered);

    }, 2000);
      
  });

  return myPromise;
}

function ItemListContainer({greeting}){
  const [productos, setproductos]=useState([]);
  const {categoryId}=useParams();

  useEffect (() =>{

    
    getItemList(categoryId)
        .then (res => {

        setproductos(res)

      })
  },[categoryId]);

  return(
      <div className='list-item-container'>
        <ItemList items={productos}/>
  
      </div>
  )

};

export default ItemListContainer;
