import React from "react";


function Header({ name, icon }) {
    return <header>
        <h1 className="title" > {icon}  {name}</h1>
    </header>
}
export default Header