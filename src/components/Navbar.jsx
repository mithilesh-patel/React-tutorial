import React from 'react';
import {Link} from "react-router-dom"


export default function Navbar(){
    return(
        <>
        <nav>
                <Link to="/conditional">conditional</Link><br/>
                <Link to="/form">Form</Link><br/>
                <Link to="/newcomponent">NewComponent</Link><br/>
                <Link to="/nhi">Nhi</Link><br/>
                <Link to="/wo">Wo</Link><br/>
                
                

            </nav>
        </>
    )
}