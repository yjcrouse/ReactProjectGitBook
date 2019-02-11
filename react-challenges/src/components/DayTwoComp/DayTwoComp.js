import React from 'react';


import {Display} from './Display/Display';

class DayTwoComp extends React.Component {
    constructor() {
        super();
        this.state = {
            movieData: []
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(json => this.setState({movieData: json}))
            .catch(err => console.log(err))
    }

    render() {
        let movieMap = this.state.movieData.map(movie => <Display name={movie.title}/>)
        return (
            <React.Fragment>
                {movieMap}
            </React.Fragment>
        )
    }
}





export default DayTwoComp;