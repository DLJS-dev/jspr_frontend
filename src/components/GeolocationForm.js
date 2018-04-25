import React from "react";
import GOOG_GEO_KEY from "../config"

export default class GeolocationForm extends React.Component{
  constructor() {
    super();

    this.state={

    }
  }
  render() {
    return(
      <form>
        <label>Street: </label>
        <p>{GOOG_GEO_KEY}</p>
        <label>City: </label>
      </form>
    )
  }
}
