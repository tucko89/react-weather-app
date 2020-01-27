import React, { Component } from 'react';

class Titles extends Component {
    render(){
        return(
            <div>
                <h1 className="title-container__title">Weather Forecast</h1>
                <p className="title-container__subtitle">Check weather forecast for any city</p>
            </div>
        )
    }
}

export default Titles;