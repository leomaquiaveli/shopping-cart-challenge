import { Head } from "./styles";
import Logo from "../../assets/compre-trufas-online.png"

export function Header(){
    return(
        <>
            <Head>
                <img src={Logo} alt="" />
            </Head>
        </>
    )
}