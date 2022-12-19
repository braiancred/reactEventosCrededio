import ItemList from "./ItemList";
import { customFetch } from "../utils/customFetch";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";

const ItemListContainer = () => {
    const[datos, setDatos] = useState([]);
    const { estilo } = useParams();

    useEffect(() => {
        if (estilo) {
        customFetch(2000, data.filter(item => item.style === estilo))
            .then(result => setDatos(result))
            .catch(err => console.log(err))     
        } else {
        customFetch(2000, data)
            .then(result => setDatos(result))
            .catch(err => console.log(err))  
        }
    }, [estilo]);

    return (
        <>
            <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;