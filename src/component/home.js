import { useState } from "react";

export default function Home(){
    const [name,setName]=useState("");
    const [ShowName,SetShowName]=useState("");
    const handleChange=(e)=>{
        setName(e.target.value);

    }
    const handleButton=()=>{
        SetShowName(`Welcome,${name}`);
    }
    return(
        <div>
            <input  type="text" placeholder="Enter Your Name" value={name} onChange={handleChange}/>
            <button className="bg-blue-200 border border-1" onClick={handleButton}>Submit</button>
            <p>{ShowName}</p>

        </div>
    )
}