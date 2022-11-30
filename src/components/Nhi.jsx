import React from "react";
import { useState  } from "react";

export default function Nhi(props) {

    const [naam, setNaam] = useState(props.name);

    return (
        <div style={{ backgroundColor: "yellowgreen" }}>

            <h1>Name : {naam}</h1>
            <h3>Email : {props.email}</h3>
            <h3>The other objects are {props.other.mob}</h3>
            <button onClick={() => setNaam(props.surname)}>Update</button>


        </div>

    )
}