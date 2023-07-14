import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginApp from "../components/Login/LoginApp"
import LoginIcon from '@mui/icons-material/Login';

export default function LoginView(){
    return(
        <>
            <Header name="Login" icon=<LoginIcon/>/>
            <LoginApp/>
            <Footer/>
        </>
    )
}