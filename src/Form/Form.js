import { Component, React, useState, useRef } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            number: 0,
            date:"",
            time:""
        }
        const [defaultName, setName] = useState('Name');
        const [number, setNumber] = useState('Number of Guests');
        const [date, setDate] = useState('Date');
        const [time, setTime] = useState('Time');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }



    

    render() {
        <form className="res-form">
          <input type="text" id="name" value={this.state.name ? this.state.name : defaultName} onChange={this.handleChange}/>
          <input type="date" id="date" value={this.state.date}/>
          <input type="text" id="time" value={this.state.time}/>
          <input type="text" id="number" value={this.state.number}/>
          <button type="submit">Submit</button>
        </form>
    }


}




