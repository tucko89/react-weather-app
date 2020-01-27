import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import CityName from "./CityName";
import CityZIP from "./CityZIP"
import SearchGeo from "./SearchGeo";

class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <h1>Weather Application</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/CityName">City Name</NavLink></li>
                    <li><NavLink to="/CityZIP">City ZIP code</NavLink></li>
                    <li><NavLink to="/SearchGeo">Search by coordinates</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/CityName" component={CityName}/>
                    <Route path="/CityZIP" component={CityZIP}/>
                    <Route path="/SearchGeo" component={SearchGeo}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export  default  Main;