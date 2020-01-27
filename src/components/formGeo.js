import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.loadWeather}>
                <input type="text" name="lat" placeholder="Latitude" />
                <input type="text" name="lon" placeholder="Longitude" />
                <button>Current Weather</button>
            </form>
        )
    }
}

export default Form;