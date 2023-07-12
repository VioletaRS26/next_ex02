'use client'
import { useEffect, useState } from "react";
import { api } from "../api/back";

export default function Users() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        api.get('/').then(response =>{
            setData(response.data);
        })
    },[]);

    return (

        <>
            <h1>Hello world Users</h1>
            {data && data.map((item) => {
                return(<p key={item.id}>{item.name}</p>)
            })}
        </>
      
    )
  }
  