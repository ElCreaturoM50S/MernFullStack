import { useState } from "react"

const MyInput = (props) => {
    const [name, setName] = useState("Stanley")
    return (
        <div>
            <h1>Pobieranie danych</h1>
            <h3>Twoje Dane: {name}</h3>
            <input 
                type="text" 
                placeholder="wprawadz imie" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="dane do rodzica"
                value="ee"
                onChange={(e)=>props(e.target.value)}
            />
        </div>
    )
}

export default MyInput