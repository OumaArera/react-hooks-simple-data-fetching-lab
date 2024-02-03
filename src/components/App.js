import { useState, useEffect } from "react";
import React from "react";

const App = () =>{

    const [image, setimage] = useState(null)

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => setimage(data.message))
    })
    if (!image) return <p>Loading...</p>
    return <div><img src= {image} alt="A Random Dog" /></div>
}

export default App