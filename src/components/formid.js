import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.loadWeather}>
                <input type="text" name="zipCode" placeholder="City ZIP code" />
                <input type="text" name="countryCode" placeholder="Country code" />
                <button class="w3-button w3-round">Current Weather</button>
            </form>
        )
    }
}

export default Form;