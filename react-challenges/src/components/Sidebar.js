import React from 'react';

import { Route, Link } from "react-router-dom";
import DayOneComp from "./DayOneComp/DayOneComp";
import DayTwoComp from "./DayTwoComp/DayTwoComp";
import DayThreeComp from "./DayThreeComp/DayThreeComp";

const Sidebar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to='/day-one-challenge'>Day One Challenge</Link></li>
                    <li><Link to='/day-two-challenge'>Day Two Challenge</Link> </li>
                    <li><Link to='/day-three-challenge'>Day Three Challenge</Link></li>
                </ul>
            </div>
            <div>
                <Route path="/day-one-challenge" exact component={DayOneComp} />
                <Route path="/day-two-challenge" exact component={DayTwoComp} />
                <Route path="/day-three-challenge" exact component={DayThreeComp} />
            </div>
        </div>
    )
}

export default Sidebar;

