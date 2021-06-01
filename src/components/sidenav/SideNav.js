import './sidenav.css';
import {useState, useEffect} from 'react'
import {BsPersonSquare} from "react-icons/bs"
import {BsChevronDown} from "react-icons/bs"
import {AiOutlineGlobal} from "react-icons/ai"
import {GiOpenBook} from "react-icons/gi"
import {AiOutlineAppstore} from "react-icons/ai"
import {IoDocumentOutline} from "react-icons/io5"
import {BsQuestionCircle} from "react-icons/bs"
import {HiOutlineInbox} from "react-icons/hi"
import {TiFolderOpen} from "react-icons/ti"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {IoLogInOutline} from "react-icons/io5"

function SideNav() {
    const [num, setNum] = useState(1);

    useEffect(() => {
        console.log("changed.");
    }, [num])

    const handleClick = (k) => {
        setNum(k);
        console.log(num);
    }



    return (
        <div className="sidenav">
                <div className="sidenav_headings"><b>MAIN</b></div>
                <div className={`sidenav_menu ${num===1 && "extra_class"}`} onclick={() => setNum(1) } style={{cursor: "pointer"}}><BsPersonSquare className="left"/><div className="menu_name"><b> Dashboard</b></div><BsChevronDown className="right" /></div>
                <div id="1" className={`sidenav_menu ${num===2 && "extra_class"}`} onclick={(id) => handleClick(id) } style={{cursor: "pointer"}}><AiOutlineGlobal className="left"/><div className="menu_name"><b> Discover</b></div><BsChevronDown className="right" /></div>
                <div className={`sidenav_menu ${num===3 && "extra_class"}`} onclick={() => setNum(3) } style={{cursor: "pointer"}}><BsPersonSquare className="left"/><div className="menu_name"><b> Users</b></div><BsChevronDown className="right" /></div>
                <div className={`sidenav_menu ${num===4 && "extra_class"}`} onclick={() => setNum(4) } style={{cursor: "pointer"}}><GiOpenBook className="left"/><div className="menu_name"><b> Documents</b></div><BsChevronDown className="right" /></div>
                <div className={`sidenav_menu ${num===5 && "extra_class"}`} onclick={() => setNum(5) } style={{cursor: "pointer"}}><AiOutlineAppstore className="left"/><div className="menu_name"><b> Applications</b></div><BsChevronDown className="right" /></div>
                <div className={`sidenav_menu ${num===6 && "extra_class"}`} onclick={() => setNum(6) } style={{cursor: "pointer"}}><IoDocumentOutline className="left"/><div className="menu_name"><b> Pages</b></div><BsChevronDown className="right" /></div>
                <div className={`sidenav_menu ${num===7 && "extra_class"}`} onclick={() => setNum(7) } style={{cursor: "pointer"}}></div>
                <div className="sidenav_headings"><b>SECONDARY</b></div>
                <div className={`sidenav_menu ${num===8 && "extra_class"}`} onclick={() => setNum(8) } style={{cursor: "pointer"}}><BsQuestionCircle className="left"/><div className="menu_name"><b> Support Center</b></div><div className="right" /></div>
                <div className={`sidenav_menu ${num===9 && "extra_class"}`} onclick={() => setNum(9) } style={{cursor: "pointer"}}><HiOutlineInbox className="left"/><div className="menu_name"><b> Inbox</b></div><div className="right" /></div>
                <div className={`sidenav_menu ${num===10 && "extra_class"}`} onclick={() => setNum(10) } style={{cursor: "pointer"}}><TiFolderOpen className="left"/><div className="menu_name"><b> File Manager</b></div><div className="right" /></div>
                 <div className={`sidenav_menu ${num===11 && "extra_class"}`} onclick={() => setNum(11) } style={{cursor: "pointer"}}><AiOutlineUnorderedList className="left"/><div className="menu_name"><b> Data list</b></div><div className="right" /></div>
                <div className="sidenav_menu"></div>
                <div className={`sidenav_menu ${num===12 && "extra_class"}`} onclick={() => setNum(12) } style={{cursor: "pointer"}}><FiSettings className="left"/><div className="menu_name"><b> Settings</b></div><div className="right" /></div>
                <div className={`sidenav_menu ${num===13 && "extra_class"}`} onclick={() => setNum(13) } style={{cursor: "pointer"}}><IoLogInOutline className="left"/><div className="menu_name"><b> Log Out</b></div><div className="right" /></div>
        </div>
    )
}

export default SideNav
