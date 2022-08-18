import React from 'react'
import './App.css'

function ColorBlock(props) {

        return (
            <div className="container">
                <div className="colorBlock"
                style={{'backgroundColor': props.color}}>
                    <div className="color-box">{props.color}</div>
                </div>
            </div>
        )
  
}


export default ColorBlock