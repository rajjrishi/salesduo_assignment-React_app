import React from 'react'
import Data from "./Data"
import BarGraph from "./BarGraph"
import "./barChart.css"
import {BsThreeDots} from "react-icons/bs"
function BarChart({x,dx}) {
	return (
		<div className="bar">
            <div className="bar_header">
                <div className="bar_header_left">New Users</div> 
                <BsThreeDots className="bar_header_left"/>
            </div>
            <Data x={x} dx={dx} isAbsolute={false}/>
            <div className="bar_line">
                <div className="bar_graph"><BarGraph goal={1000} x={400}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={1000}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={238}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={759}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={456}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={985}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={102}/></div>
				<div className="bar_graph"><BarGraph goal={1000} x={666}/></div>
            </div>
        </div>
	)
}

export default BarChart
