import { Free, ShippingAlert } from "./styles"

export function FreeShipping(){
    return(
        <ShippingAlert>
            <Free>
                <h4>Parabéns, sua compra tem frete grátis !</h4>
            </Free>
        </ShippingAlert>
    )
}