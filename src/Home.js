import React, { Component } from "react";

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Hello</h2>
                <p>If you want to search by city name, please  select City.
                If you would like to search by zip code, please select Zip code.
                If you want to search by coordinates, please go to Search by coordinates</p>
                 <p>Thank you for using our service!</p>
            </div>
        );
    }
}

export default Home;