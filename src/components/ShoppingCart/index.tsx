import { FreeShipping } from "../FreeShipping";
import { Product } from "../Product";
import { Cart, CartProducts, Container, PriceWrap, Purchase, Title, TotalPrice } from "./styles";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Truffle } from '../../models/truffle';

const GET_PRODUCTS_QUERY = gql`
    query{
        products {
            id
            name
            price
            fullprice
            imageurl
        }
    }
`

export function ShoppingCart(){
    
    const { data } = useQuery<{ products: Truffle[] }>(GET_PRODUCTS_QUERY)

    const [totalPriceCount, setTotalPriceCount] = useState(0);
    
    function priceTotalAction() {
        let Total: any = data?.products.reduce((a, b) => a + b.price, 0)
        setTotalPriceCount(Total)
    }

    useEffect(()=>{
        
      }, [])

    return(
        <Container>
            <Cart onLoad={priceTotalAction}>

                <Title>
                    <h2>Meu Carrinho</h2>
                </Title>

                <CartProducts>

                {data?.products.map(truffle => {
                    return (
                    <Product 
                        key={truffle.id}
                        id={truffle.id}
                        image={truffle.imageurl} 
                        title={truffle.name} 
                        fullprice={truffle.fullprice} 
                        price={truffle.price}
                        
                    />
                    )
                })}
                </CartProducts>
                
                <TotalPrice>
                    <PriceWrap>
                    <p>Total</p>
                    <p>R$ {totalPriceCount.toFixed(2)}</p>
                    </PriceWrap>
                    {totalPriceCount > 10 &&
                        <FreeShipping />
                    }
                    
                </TotalPrice>
                
                <Purchase>
                    <button onClick={priceTotalAction}>Finalizar Compra</button>
                </Purchase>

            </Cart>
        </Container>
    )
}