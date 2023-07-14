import Footer from "../components/Footer";
import Header from "../components/Header";
import FlagIcon from '@mui/icons-material/Flag';
import { Link } from 'react-router-dom'


export default function HomeView() {
    return (
        <>
            <Header name="React basics compilation" icon=<FlagIcon /> />
            <div className="homeBody">
                <h2>Note taking app</h2>
                <Link to={"/keeper"}><button className="homeButton">Keeper</button></Link>
                <h2>Conditional rendering</h2>
                <Link to={"/login"}><button className="homeButton">Login</button></Link>
                <Link to={"/register"}><button className="homeButton">Register</button></Link>
                <h2>Managing a component tree</h2>
                <Link to={"/todo"} ><button className="homeButton">ToDo List</button></Link>
                <h2>Mapping components </h2>
                <Link to={"/emojipedia"}><button className="homeButton">Emojipedia</button></Link>
                <h2>useState Hook</h2>
                <Link to={"/hook"}><button className="homeButton">Hooks</button></Link>

            </div>
            <Footer />
        </>
    )
}