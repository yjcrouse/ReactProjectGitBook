import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    console.log('[App.js] inside constructor()')
    super(props);
    this.state = {
      name: 'Alecx Moritz',
      swapiPeople: {}
    }
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
    fetch('https:swapi.co/api/people')
    .then(res => res.json())
    .then(json => this.setState({swapiPeople: json.results}, () => console.log(this.state)))
    .catch(err => console.log(err));
    this.interval = setInterval(() => console.log ('this output is from our interval'), 10000)
  }

  shouldComponentUpdate(){
    console.log('[App.js] inside shouldComponentUpdate');
    return true;
  }

  componentWillUnmount(){
    console.log('[App.js] inside componentWillUnmount()');
    clearInterval(this.interval);
  }

  render() {
   console.log('[App.js] inside render()')
   return (
     <div className="App">
     </div>
    );
  }
}

export default App;
