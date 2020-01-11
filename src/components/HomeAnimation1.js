import React from 'react'

import '../App.css'

const NUM_OF_BOXES = 40

export default function BoxAnimation() {
    const Boxes = []

    for ( let i = 0; i < NUM_OF_BOXES; i++) {
        Boxes.push(<div className = "Box" />)
    }

    return (
        <div className = "Box_Animation_Container">
            { Boxes.map(element => element ) }
        </div>
    )
}