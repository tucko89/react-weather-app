import React, { Component } from "react";
import Weather from './components/weather';
import Form from './components/formid';


const API_key = "484e0d0f7841fe77e788d39625c98ecf";

class CityZIP extends Component{

    state = {
        temperature: undefined,
        city: undefined,
        maxT: undefined,
        minT: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        const zipCode = e.target.elements.zipCode.value;
        const countryCode = e.target.elements.countryCode.value;
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=metric&appid=${API_key}`);
        const response = await api_call.json();
        console.log(response);

        if (zipCode && countryCode) {
            this.setState({
                temperature: response.main.temp + ' °C',
                city: response.name,
                maxT: response.main.temp_max + ' °C',
                minT: response.main.temp_min + ' °C',
                description: response.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                error: "Please enter city"
            })
        }
    }

    render()
    {
        return (

            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-7 form-container">
                                    <Form loadWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        maxT={this.state.maxT}
                                        minT={this.state.minT}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CityZIP;