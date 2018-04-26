import React from "react";
import CONFIG from "../config"

const BASE_URL = `https://api.darksky.net/forecast/${CONFIG.DARKSKY_KEY}`

export default class WeatherContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      lat: this.props.geolocation.lat,
      long: this.props.geolocation.lng,
      weatherSum: ""
    }
  }

  componentDidMount = () => {
    fetch(`${BASE_URL}/${this.state.lat},${this.state.long}`)
      .then(res => res.json())
      .then(json => console.log(json))
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}
