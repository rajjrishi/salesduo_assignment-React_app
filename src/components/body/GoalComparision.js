import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './goalComparision.css'
import {Card, IconButton} from "@material-ui/core"
import Data from "./Data"

function GoalComparision({x,dx,goal}) {
    const ratio = x*100/goal;

    return (
        //<div >
        <div className="goal">
            <div className="goal_header">
                <div className="goal_header_left">Total Income</div> 
                <BsThreeDots className="goal_header_left" />
            </div>
            <Data x={x} dx={dx} isAbsolute={true}/>
            <div className="goal_line">
                <div style={{backgroundColor:"#BC33FF",width:`${ratio}%`}}></div>
            </div>
            <div style={{color:"rgb(190,190,220)",fontSize:"x-small",paddingTop:"5px"}}>Yearly Goal</div>
        </div>
    )
}

export default GoalComparision
