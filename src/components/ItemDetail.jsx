const ItemDetail = ({ item }) => {

    return (
        <>
        {
            <div>
                <title>{item.name}</title>
                <img src={item.banner} alt="banner del evento"></img>
                <p>{item.style}</p>
                <p>{item.location}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
            </div>
        }
        </>
    );
}

export default ItemDetail;