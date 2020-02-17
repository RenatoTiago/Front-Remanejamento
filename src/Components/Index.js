import React, { Component } from "react";
import Computador from "../svgs/Computador";
import Mesa from "../svgs/Mesa";
import { Grid } from "@material-ui/core";
import Apresentacao from "./Apresentacao";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="index">
        <Apresentacao />



      </div>
    );
  }
}
