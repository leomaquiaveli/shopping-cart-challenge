import { Head } from "./styles";
import Logo from "../../assets/compre-trufas-online.png"
import { useNavigate } from "react-router";

export function Header(){
    const navigate = useNavigate()

    return(
        <>
            <Head onClick={() => navigate('/')}>
                <img src={Logo} alt="" />
            </Head>
        </>
    )
}