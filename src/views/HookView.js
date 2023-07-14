import Footer from "../components/Footer";
import Header from "../components/Header";
import CounterApp from "../components/Hook/CounterApp"
import TimeApp from "../components/Hook/TimeApp";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function HookView() {
    return (<>
        <Header name="Counter and Time" icon=<AccessTimeIcon/> />
        <div className="hookBody">
            <CounterApp />
            <TimeApp />
        </div>
        <Footer />
    </>)
}