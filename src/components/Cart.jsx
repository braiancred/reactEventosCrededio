import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../App.css";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice} from './styledComponents';
import { serverTimestamp, doc, setDoc, collection, increment, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

    const test = useContext(CartContext);
    
    const createOrder = () => {
        const order = {
            buyer: {
                name: "Braian Crededio",
                email: "braiancred@gmail.com",
                phone: "534537457"
            },
            date: serverTimestamp(),
            items: test.CartList.map(item => ({
                id: item.idItem,
                title: item.name,
                price: item.price,
                qty: item.qty
            })),
            total: test.calcTotal()
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrderInFirestore()
            .then(result => {
                alert("Felicitaciones, has realizado la compra! El código de tu compra es " + result.id)
                //Actualizar el stock de tickets:
                test.cartList.forEach( async(item) => {
                    const itemRef = doc(db, "eventos", item.idItem)
                    await updateDoc(itemRef, {
                        stock: increment(-item.qtyItem)
                    });
                })
                //Vaciar el carrito:
                test.removeList()
            })
            .catch(err => console.log(err))
    }
  
return (
          <WrapperCart>
              <TitleCart>YOUR CART</TitleCart>
              <Top>
                  <Link to='/'><TopButton>Seguir Comprando</TopButton></Link>
                  {
                      (test.cartList.length > 0)
                      ? <TopButton type="filled" onClick={test.removeList}>Borrar todos los tickets</TopButton>
                      : <TopText>No tienes tickets en tu carrito</TopText>
                  }
              </Top>
              <ContentCart>
              <Bottom>
                  <Info>
                      {
                          test.cartList.length > 0 &&
                              test.cartList.map(item => 
                              <Product key={item.idItem}>
                              <ProductDetail>
                                  <ImageCart src={item.banner} />
                                  <Details>
                                  <span>
                                      <b>Product:</b> {item.name}
                                  </span>
                                  <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>BORRAR</TopButton>
                                  </Details>
                              </ProductDetail>
                              <PriceDetail>
                                  <ProductAmountContainer>
                                  <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                  /
                                  <ProductAmount>$ {item.price} each</ProductAmount>
                                  </ProductAmountContainer>
                                  <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                              </PriceDetail>
                              </Product>
                              )
                      }
                  </Info>
                  {
                      test.cartList.length > 0 &&
                          <Summary>
                              <SummaryTitle>LISTA DE TICKETS</SummaryTitle>
                              <SummaryItem>
                                  <SummaryItemText>Subtotal</SummaryItemText>
                                  <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                              </SummaryItem>
                              <SummaryItem>
                                  <SummaryItemText>Taxes</SummaryItemText>
                                  <SummaryItemPrice><FormatNumber number={test.calcPriceCharge()} /></SummaryItemPrice>
                              </SummaryItem>
                              <SummaryItem>
                                  <SummaryItemText>Cargo por servicio</SummaryItemText>
                                  <SummaryItemPrice><FormatNumber number={-test.calcChargePrice()} /></SummaryItemPrice>
                              </SummaryItem>
                              <SummaryItem type="total">
                                  <SummaryItemText>Total</SummaryItemText>
                                  <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                              </SummaryItem>
                              <Button onClick={createOrder}>COMPRAR AHORA</Button>
                          </Summary>
                  }
              </Bottom>
              </ContentCart>
          </WrapperCart>
      );
  }

/* return (
        <>
            <div>
                <h1>Tus entradas:</h1>
                <ul>
                    {
                        cartList.length === 0
                        ? <div>
                            <p>No tienes entradas en el carrito</p><button><Link to='/' type="button" class="btn btn-secondary">Ir a comprar</Link></button>
                            </div>
                        : cartList.map(item => <li key={item.id}>{item.name} cantidad:{item.qty}<button onClick={() => deleteThis(item.id)} type="button" class="btn btn-secondary">Eliminar</button></li>)
                    }
                </ul>
            </div>
            <div>
                {
                    (cartList.length > 1)
                    ? <button onClick={removeList} type="button" class="btn btn-secondary">Eliminar todo</button> 
                    : <p></p>
                }
            </div>
            <div>
                {
                    (cartList.length > 0)
                    ? <button><Link to='/' type="button" class="btn btn-secondary">Seguir Comprando</Link></button>
                    : <p></p>
                }
            </div>
        </>
    );
} */

export default Cart;