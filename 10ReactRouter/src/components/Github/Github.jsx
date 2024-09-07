import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function GitHub() {
    const [data , setData] = useState([])
    useEffect ( () => {
        fetch('https://api.github.com/users/prem-choudhary')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })

    } , [])
    return(
        <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github followers : {data.followers} 
        <img src={data.avatar_url} width={300}/>
        </h1>
    )
}

export default GitHub