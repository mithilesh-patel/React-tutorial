
import React, { useState } from "react";




export default function Newcomponent() {
    const [Data, setData] = useState(undefined)
    const [show, setshow] = useState(false)

    function func(val) {
        console.log(val.target.value);
        setData(val.target.value);
    }

    return (
        <div>
            {
                show?<h1>Laptop</h1>:null
            }
            <h1>{Data}</h1>
            <input type="text" onChange={func} />
            <br />
            <br />
            <button onClick={()=>setshow(true)}>Show</button>
            <br />
            <br />
            <button onClick={()=>setshow(false)}>Hide</button>

            <button onClick={()=>setshow(!show)}>Toggle</button>


        </div>
    )
}

