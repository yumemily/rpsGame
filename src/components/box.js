import React from 'react'

export default function Box(props) { //(probs is an object that will contain )
    return (
        <div className = {props.color}>
            <h1>{props.contents}</h1>
            <div>{props.color}</div>
        </div>
    )
}
