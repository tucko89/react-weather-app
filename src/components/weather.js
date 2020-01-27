import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weather extends Component {
    render() {
        return (
            <div className="weather-info">
                {
                    this.props.city && <p className="weather_key">Location:
                        <span className="weather_value"> {this.props.city} </span>
                    </p>
                }

                {
                    this.props.temperature && <p className="weather_key">Temperature:
                        <span className="weather_value"> {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.maxT && <p className="weather_key">Max temperature:
                        <span className="weather_value"> {this.props.maxT}</span>
                    </p>
                }
                {
                    this.props.minT && <p className="weather_key">Min temperature:
                        <span className="weather_value"> {this.props.minT} </span>
                    </p>
                }
                {
                    this.props.description && <p className="weather_key">Conditions:
                        <span className="weather_value"> {this.props.description} </span>
                    </p>
                }
                {
                    this.props.error && <p className="weather_error">{this.props.error}</p>
                }
            </div>
        )
    }
}

export default Weather;