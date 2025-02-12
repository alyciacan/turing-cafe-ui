import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations() 
      .then(data => this.setState({ reservations: data }))
  }

  addReservation = (newRes) => {
    console.log(newRes)
    this.setState(prevState => ({ reservations: [newRes, ...prevState.reservations] }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
