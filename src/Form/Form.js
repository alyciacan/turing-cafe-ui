import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: 0,
            date:"",
            time:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit(e) {
        const newRes = this.state; 
        newRes.id = Date.now();
        this.props.addReservation(newRes);
        e.preventDefault();

    }

    render() {
        return (
        <form className="res-form">
            <label htmlFor="name">Name:
                <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label htmlFor="date">Date:
                <input type="date" id="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <label htmlFor="time">Time:
                <input type="text" id="time" value={this.state.time} onChange={this.handleChange} />
             </label>
             <label htmlFor="number">Number of guests:  
                <input type="number" id="number" value={this.state.number} onChange={this.handleChange} />
            </label> 
          <button type="button" onClick={this.handleSubmit}>Make Reservation</button>
        </form>
        )
    }


}




export default Form;