import './header.css'
import logo from "./logo.png"
import profile_photo from './profile_photo.jpg'
import {FiSearch} from 'react-icons/fi'
import {FiSettings} from "react-icons/fi"
import {BsChatSquare} from "react-icons/bs"
import {IoMdNotificationsOutline} from "react-icons/io"
import { Avatar } from '@material-ui/core'
import {BsChevronDown} from "react-icons/bs"
import {FaBars} from "react-icons/fa"

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo_wrap">
                    <img src={logo} className="logo_icon"/>
                    <b className="logo_name">Artemis</b>
                </div>
            </div>
            <div className="header_other">
                <div className="header_other_wrap">
                <input type="checkbox" id="header_sidenav"/><label for="header_sidenav" className="header_sideicon"><FaBars/></label>
                    <FiSearch className="header_search_icons" size={20}/>
                    <input type="text" placeholder="Type to search..." className="search_form" />
                    <FiSettings className="header_icons" size={20}/>
                    <BsChatSquare className="header_icons" size={20}/>
                    <IoMdNotificationsOutline className="header_icons" size={25}/>
                    <div className="profile">
                        <div className="profile_text">
                            <b><div className="username">Rishi Gupta</div>
                            <div className="userpost">Developer</div></b>
                        </div>
                        <div className="profile_photo">
                            <Avatar src={profile_photo} className="avatar"/>
                            <BsChevronDown className="dropdown" size={14}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
