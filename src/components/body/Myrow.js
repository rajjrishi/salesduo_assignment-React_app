import React, {useEffect, useState} from 'react'
import './table.css'
import {BsChevronExpand} from 'react-icons/bs'

function Myrow({props,isChecked=false,ndx}) {
    const [checked,setChecked] = useState(false);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked])

    const handleClick = () => {
        if(checked===false)
        {setChecked(true);}
        else
        {setChecked(false);}
    }

    return (
        <div className={`myrow ${checked === true ? "checked" : ndx%2 === 0 ? "odd" : "even" }
        `}>
            <input type="checkbox" onClick={() => handleClick()} />
            <div className="invoice">{props.InvoiceId}</div>
            <div className="date">{props.Date}</div>
            <div className="description">{props.Description}</div>
            <div className="status">
                <span className={props.Status === "Completed" ? "green_class" : "orange_class"}> {props.Status} </span>
            </div>
            <div className="billing">{props.Billing}</div>
        </div>
    )
}

export default Myrow
