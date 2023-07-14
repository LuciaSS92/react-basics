import Footer from "../components/Footer";
import Header from "../components/Header";
import ToDoApp from "../components/ToDoList/ToDoApp";
import CreateIcon from '@mui/icons-material/Create';

export default function ToDoView(){
    return(
        <>
            <Header name="To-Do List" icon=<CreateIcon/>/>
            <ToDoApp/>
            <Footer/>
        </>
    )
}