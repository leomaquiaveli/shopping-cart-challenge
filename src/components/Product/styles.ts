import styled from "styled-components";

/* -- PRODUCTS CART LIST -- */

export const ProductBox = styled.div`
    width: 100%;
    height: 100px;
    margin: 20px 0;

    display: flex;
`

export const ProductImg = styled.div`
    border: 2px solid rgb(146, 146, 146, 0.5);
    width: 25%;
    height: 100%;
    margin-left: 30px;

    display: flex;
    justify-content: center;

`

export const ProductDetails = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h5{
        margin-top: 5px;
        font-weight: 300;
    }
    
    p{
        margin-bottom: 5px;
        font-weight: 700;
    }
`

/* -- PRODUCTS CART LIST -- */

