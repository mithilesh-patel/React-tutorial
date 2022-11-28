import React from "react";
import { useState } from "react";


export default function Form() {
    const [name, setname] = useState("");
    const [tnc, settnc] = useState(false);
    const [interest, setinterest] = useState("");




    function getFormData(e) {
        console.log(typeof name,typeof tnc,typeof interest)
        console.log( name, tnc, interest)
        e.preventDefault();
    }


    return (
        <div>
            <h1>Handle form in React</h1>

            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e) => setname(e.target.value)} />

                <select onChange={(e) => setinterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                    <option>Twinkle</option>
                </select><br /><br />

                <input type="checkbox" onChange={(e) => settnc(e.target.checked)} /><span>Accept Terms and Conditions</span><br /><br />
                <button>Submit</button>
                <button>Reset</button>

            </form>



        </div>
    )
}