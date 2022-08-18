import React, { useState } from "react"

function ColorForm(props) {
    let [input, setInput] = useState(" ")

    const handleSubmit = (e) => {
        props.addColor(input)
        e.preventDefault()
        setInput(' ')
    };


    return (
        <div className="input-box">
            <form onSubmit={handleSubmit}>
                <input type="text" value={input}
                onChange={ (e) => setInput(e.target.value) } />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


export default ColorForm