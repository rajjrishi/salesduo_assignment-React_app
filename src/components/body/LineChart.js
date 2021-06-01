import React,{useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {FormControl,Select,MenuItem} from "@material-ui/core"
import './LineChart.css'
import Data from "./Data"
import CanvasJSReact, {CanvasJSChart} from 'canvasjs-react-charts'
 
 function LineChart() {
     const [type,setType] = useState("Yearly");
     const [data,setData] = useState([]);
     const arr = ["Weekly","Monthly","Quaterly","Yearly"];

     var total_income = [];
     for(let i=0;i<365;i++)
     {
         const k= ( Math.random() * 100) + 1;
         total_income.push({x: i, y: k});
     }

     useEffect(()=>{
        var rryi = total_income;
         if(type === "Weekly")
         {
             var rry = total_income.splice(358,7);
             setData(rry);
         }
         else if(type == "Monthly")
         {
            var rry = total_income.splice(336,30);
            setData(rry);
         }
         else if(type == "Quaterly")
         {
            var rry = total_income.splice(276,90);
            setData(rry);
         }
         else
         {
             setData(total_income);
         }
         total_income = rryi;
     },[type])

     const options = {
        theme: "light2", // "light1", "dark1", "dark2"
        animationEnabled: true,
        zoomEnabled: true,
        height: 200,
        data: [{
            type: "area",
            dataPoints: data}],
        axisX:{
            lineThickness: 0,
            tickThickness: 0,
            margin:0,
            labelFormatter: function(){
                return " ";
              } 
        },
        axisY:{
            lineThickness: 0,
            gridThickness: 0,
            tickLength: 0,
            margin:0,
            maximum: 130,
            labelFormatter: function(){
                return " ";
              } 
        }
    }
     return (
         <div className="right_body">
             <div className="right_body_header">
                 <div className="Name"><b>Balance</b></div>
                 <FormControl>
                 <Select variant="outlined" onChange={(e) => setType(e.target.value)} value={type} className="selection">
                 {arr.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
                 </Select>
                 </FormControl>
             </div>
             <div className="boxes">
                 <div className="box">
                     <div className="box_header"><b>Earning</b></div>
                     <Data x={43.41} dx={6.5} isAbsolute={false} isSmall={true}/>
                </div>
                 <div className="box">
                     <div className="box_header"><b>Sales Value</b></div> 
                 <Data x={93000} dx={6.5} isAbsolute={true} isSmall={true}/></div>
             </div>
             <div className="line_graph">
                 <CanvasJSChart options = {options} />
            </div>
        </div>
     )
 }
 
 export default LineChart
 