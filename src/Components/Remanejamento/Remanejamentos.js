import React, { Component } from 'react';
import Computador from '../../svgs/Computador';
import Mesa from '../../svgs/Mesa';
import "../../css/remanejamento.css"


export default class Remanejamentos extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="remanejamentos">
                <div className="computer">
                    <Computador />
                </div>
                <div className="table">
                    <Mesa />
                </div>
            </div>
        )
    }
}
