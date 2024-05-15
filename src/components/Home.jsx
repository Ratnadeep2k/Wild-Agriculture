import React from 'react'

function Home() {
    return (
        <>
            
            <div className="flex flex-col items-center justify-center h-screen bg-green-100 bg">
                <h1 className="text-4xl font-bold">Welcome to Wild Agriculture</h1>
                <p className="text-lg mt-4">We provide the best agricultural services in Assam</p>
                <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Get Started</button>
            </div>
        </>
    )
}

export default Home