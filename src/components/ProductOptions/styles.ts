import styled from "styled-components";

/* -- INITIAL SETUP STYLES -- */
export const Container = styled.section`
    background-color: #d1d8e5;
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const ProductPack = styled.div`
    background-color: #ffffff;
    width: 320px;
    height: 340px;
    margin: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

    border-radius: 10px;

    box-shadow: 0px 0px 8.19px 0.81px rgba(0, 0, 0, 0.10)
    ;

    h2{
        margin-bottom: 5%;
    }
`

/* -- INITIAL SETUP STYLES -- */

/* -- CART PRODUCTS -- */ 
export const CartProducts = styled.div`
    width: 100%;
    height: 70%;
    border-bottom: 1px solid rgb(146, 146, 146, 0.5);
`
/* -- CART PRODUCTS -- */ 

/* -- TOTAL PRICE DIV-- */
export const TotalPrice = styled.div`
    width: 100%;
    height: 10%;
    padding: 4%;
    border-bottom: 1px solid rgb(146, 146, 146, 0.5);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        font-size: 1.3rem;
        font-weight: 700;
    }
`

export const PriceWrap = styled.div`
        width: 100%;
        margin-bottom: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
`
/* -- TOTAL PRICE DIV -- */

/* -- PURCHASE SPACE -- */
export const Purchase = styled.div`
    width: 100%;
    height: 10%;
    margin: 20px 0;

    display: flex;
    justify-content: center;

    
    button{
        background-color: #3b74f2;
        color: #ffffff;

        width: 90%;
        height: 50px;

        font-size: 1.2rem;
        font-weight: 700;

        border: none;
        border-radius: 5px;

        transition: 0.2s;

    }

    button:hover{
        background-color: #4f84f8;
    }
`
/* -- PURCHASE SPACE -- */
