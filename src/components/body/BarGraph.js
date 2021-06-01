import React from 'react'
import "./barGraph.css"

function BarGraph({goal,x}) {
    return (
        <div className="graph">
            <div className="graph_upper" style={{flex:`${goal-x}`}}></div>
            <div className="graph_lower" style={{flex:`${x}`}}></div>
        </div>
    )
}

export default BarGraph
