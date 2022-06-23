import { ProductProps } from "../../models/product";
import { ProductBox, ProductDetails, ProductImg, } from "./styles";

export function Product({id, image, title, fullprice, price}: ProductProps){

    return(
        <ProductBox>
            <ProductImg>
                <img src={image} alt="" />
            </ProductImg>
            <ProductDetails>
                <h4>{title}</h4>
                <h5><s>R$ {fullprice}</s></h5>
                <p>R$ {price}</p>
            </ProductDetails>
        </ProductBox>
    )
}