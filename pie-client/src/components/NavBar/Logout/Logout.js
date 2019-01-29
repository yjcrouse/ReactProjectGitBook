import React from 'react';

import './Logout.css';
import logoutPic from '../../../assets/LogoutButton.png';

const Logout = (props) => {
    return(
        <img className="Logout" src={logoutPic} alt="Logout" onClick={props.logout}/>
    )
}

export default Logout;