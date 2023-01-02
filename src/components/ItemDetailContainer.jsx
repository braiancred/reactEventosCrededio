import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import swal from "sweetalert";

const ItemDetailContainer = () => {
    const[dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const fetchOneFromFirestore = async() => {
            const docRef = doc(db, "eventos", idItem);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return{
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
                swal({
                    title: "No se encontró el evento",
                    icon: "error",
                    button: "Aceptar"});
            };
        }
        fetchOneFromFirestore()
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;