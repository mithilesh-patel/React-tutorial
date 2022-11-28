import React from "react";
import { useState ,useEffect } from "react";


export function Nhi(props) {

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


export function Wo() {
    const [data, setData] = useState(0);




    function increment() {
        setData(aprev => aprev + 4);

    }

    function decrement() {

        setData(aprev => aprev - 1);
    }


    useEffect(()=>{
        document.title=`clicked ${data} times`
    },[data])  

    return (

        <div>
            <h1>The data is {data}</h1>
            <button onClick={increment}>Increase 4</button>
            <button onClick={decrement}>Decrease 1</button>
        </div>
    )

}