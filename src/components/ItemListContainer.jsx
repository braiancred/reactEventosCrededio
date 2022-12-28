import ItemList from "./ItemList";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const ItemListContainer = () => {
    const[datos, setDatos] = useState([]);
    const { estilo } = useParams();

    useEffect(() => {
        const fetchFromFirestore = async() => {
            let q;
            if (estilo) {
                q = query(collection(db, "eventos"), where("style", "==", estilo));
            } else {
                q = query(collection(db, "eventos"), orderBy("date"));
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return dataFromFirestore;
        }
        fetchFromFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [estilo]);
    
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
            <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;