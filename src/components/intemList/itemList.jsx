import Item from "../Item/Item";



function itemList ({items}){

    return(

        <div className='item-list'>
            {items.map(item => <Item item={item} key={item.id}/>)}

        </div>
    )
}

export default itemList


/*const ItemList =({productos}) =>{
    return (
        <>
            
            {productos.map(producto =>{
                return(
                    <Item key={producto.id} title={producto.title} image={producto.image} descripcion= {producto.descripcion} precio={producto.precio} /> 
                );
            })}

        </>
    );

};

export default ItemList
*/