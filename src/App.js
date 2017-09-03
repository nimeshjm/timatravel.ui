import React, { Component } from 'react';

class App extends Component {
  state = {
    id: '',
    destination: '',
    date: '',
    result: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://timetravel-api-orthogenic-flesher.local.pcfdev.io/trip', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        destination: this.state.destination,
        date: this.state.date,
      })
    })
    .then(response => {
      this.setState({result:response.statusText});
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="trip-id" onChange={ (event) => this.setState({id:event.target.value, result: ''})} placeholder="Personal Galactic Identifier" required />
          </div>
          <div>
            <input type="text" name="trip-destination" onChange={ (event) => this.setState({destination:event.target.value, result: ''})} placeholder="Destination" required />
          </div>
          <div>
            <input type="date" name="trip-date" onChange={ (event) => this.setState({date:event.target.value, result: ''})} placeholder="Date" required />
          </div>
          <button type="submit">Submit travel</button>
        </form>
        <div>
          {this.state.result}
        </div>
      </div>
    );
  }
}

export default App;
