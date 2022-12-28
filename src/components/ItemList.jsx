import Item from "./Item";

const ItemList = ({items}) => {
    
    return (
        <>
            {
                items.length > 0
                ? items.map(item => <Item key={item.id} id={item.id} name={item.name} style={item.style} location={item.location} date={item.date} description={item.description} banner={item.banner}/>)
                : <p>Cargando Eventos...</p>
            }
        </>
    ) 
}

export default ItemList;