import Item from "./Item";

const ItemList = ({items}) => {
    
    return (
        <>
            {
                items.length > 0
                ? items.map(item => <Item key={item.id} id={item.id} banner={item.banner}/>)
                : <p>Cargando Eventos...</p>
            }
        </>
    ) 
}

export default ItemList;