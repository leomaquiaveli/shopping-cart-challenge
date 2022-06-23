import { useNavigate } from "react-router"
import { Container, ProductPack } from "./styles"
import EspecialTruffles from "../../assets/trufa-tradicional.png"
import Truffles from "../../assets/trufa-meio-amargo.png"

export function ProductOptions(){
    const navigate = useNavigate()
    return(
        <Container>
            <ProductPack 
                onClick={() => navigate('/checkout')}
            >
                <img src={EspecialTruffles} alt="" />
                <h2>Pack Trufas Tradicionais</h2>
            </ProductPack>
            
            <ProductPack
                onClick={() => navigate('/checkout')}
            >
                <img src={Truffles} alt="" />
                <h2>Pack Trufas Especiais</h2>
            </ProductPack>
            
        </Container>
        
    )
}