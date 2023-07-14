import Footer from "../components/Footer";
import Header from "../components/Header";
import EmojiApp from "../components/Emojipedia/EmojiApp";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function EmojiView(){
    return(
        <>
        <Header name="Emojipedia" icon=<EmojiEmotionsIcon/>/>
        <EmojiApp/>
        <Footer/>
        </>
    )
}