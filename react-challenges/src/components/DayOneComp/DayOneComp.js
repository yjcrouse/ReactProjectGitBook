import React from 'react';

import DayOneFunctional from './DayOneFunctional/DayOneFunctional'

class DayOneComp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Paul OConner',
            age: 44,
            favColor: 'blue'
        }
    }

    logState = () => {
        console.log(this.state);
    }

    render() {
        let returnArr = Object.values (this.state).map(value => <DayOneFunctional displayInfo={value}/>)
        return (
            <React.Fragment>
               {returnArr}
            </React.Fragment>
        )
    }
}

export default DayOneComp;