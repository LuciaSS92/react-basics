import Footer from "../components/Footer";
import Header from "../components/Header";
import KeeperApp from "../components/Keeper/KeeperApp";
import HighlightIcon from '@mui/icons-material/Highlight';


export default function KeeperView() {
    return (
        <>
            <Header name="Keeper" icon=<HighlightIcon /> />
            <KeeperApp />
            <Footer />
        </>
    )
}