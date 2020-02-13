import React, { Component } from 'react';
import '../../css/sessionOne.css'
import logo from "../../img/LogoDDT2.png";
import DetalhamentoSessionOne from './DetalhamentoSessionOne';


export default class SessionOne extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div className="session-one">
                <img src={logo} />
                <DetalhamentoSessionOne />
            </div>
        )
    }
}
