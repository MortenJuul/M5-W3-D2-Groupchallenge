import React, { Component } from 'react';
import Contacts from './Contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contacts: []
     }
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

  render() { 
    return (
      <div>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
 
export default App;