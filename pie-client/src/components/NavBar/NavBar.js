import React from 'react';

import './NavBar.css';
import piePic from '../../assets/piephoto.jpg'
import Logout from './Logout/Logout';

const NavBar = (props) => {
    return (
        <nav>
            <img src= {piePic} alt="PiePicture"/>
            <Logout />
        </nav>
    )

}

export default NavBar;