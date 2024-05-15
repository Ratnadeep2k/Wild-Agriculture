import React from 'react'
import {useState} from 'react'
function Home() {
    const[click, setClick] = useState(" Where Nature Meets Innovation");
    const handleChange=()=>{
        setClick("I am Tonmoy, Welcome to our page");
    }
    return (
        <>
            
            <div className="flex flex-col items-center justify-center h-screen bg-green-100 bg">
                <h1 className="text-4xl font-bold">Welcome to Wild Agriculture</h1>
                <button onClick ={handleChange} className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">{click}</button>
            </div>
        </>
    )
}

export default Home