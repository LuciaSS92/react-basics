import Footer from "../components/Footer";
import Header from "../components/Header";
import CounterApp from "../components/Hook/CounterApp"
import TimeApp from "../components/Hook/TimeApp";

export default function HookView(){
    return(<>
    <Header name="Counter and Time"/>
    <CounterApp/>
    <TimeApp/>
    <Footer/>
    </>)
}