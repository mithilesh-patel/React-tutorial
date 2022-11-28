import { useState } from "react";


export default function Conditional() {
    const [a, seta] = useState(0);



    return (
        <div>
            <h1>Conditional rendering</h1>
            <div>
                {a===0 ? <h1>Value is 1</h1> :a===2 ?<h1>Value is 2</h1>:<h1>Value is 3</h1>}
            </div>
            <button onClick={ ()=> seta(2)}>Click me</button>
        </div>
    )
}