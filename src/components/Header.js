import React from "react";
import { Link } from 'react-router-dom'


function Header({ name, icon }) {
    return <header>
    <Link to={"/"} style={{ textDecoration: 'none' }}> <h1  > {icon}  {name}</h1></Link>       
    </header>
}
export default Header