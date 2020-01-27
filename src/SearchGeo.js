import React, { Component } from "react";
import Weather from './components/weather';
import Form from './components/formGeo';


const API_key = "484e0d0f7841fe77e788d39625c98ecf";

class SearchGeo extends Component{

    state = {
        temperature: undefined,
        city: undefined,
        maxT: undefined,
        minT: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        const lat = e.target.elements.lat.value;
        const lon = e.target.elements.lon.value;
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`);
        const response = await api_call.json();
        console.log(response);

        if (lat && lon) {
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


export default SearchGeo;