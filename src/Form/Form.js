import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
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
        console.log('Submitted');
        e.preventDefault();

    }

    render() {
        console.log(this.state)
        return (
        <form className="res-form">
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          <input type="date" id="date" value={this.state.date} onChange={this.handleChange} />
          <input type="text" id="time" value={this.state.time} onChange={this.handleChange} />
          <input type="text" id="number" value={this.state.number} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        )
    }


}




export default Form;