import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterApp from "../components/Register/RegisterApp"
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function RegisterView(){
    return(
        <>
            <Header name="Register" icon=<VpnKeyIcon/>/>
            <RegisterApp/>
            <Footer/>
        </>
    )
}