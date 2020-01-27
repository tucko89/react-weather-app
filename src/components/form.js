import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.loadWeather}>
                <input type="text" name="city" placeholder="City Name" />
                <button>Current Weather</button>
            </form>
        )
    }
}

export default Form;