import React, { Component } from 'react';
import computer from '../../img/computer.png';
import telephone from '../../img/Telefone.png'

export default class DetalhamentoSessionOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NumRemanejamentos: 0

        }

    }

    render() {
        setTimeout(() => {
            this.setState({
                NumRemanejamentos: this.state.NumRemanejamentos + 1
            })
        }, 10000);
        return (
            <div className="detalhamento">
                <div className="config-detalhamento">
                    <div>
                        <div className="computer-icon">
                            <div className="visible">
                                <ul>
                                    <li>
                                        <img src={computer} />

                                    </li>
                                    <li>
                                        <img src={telephone} />
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="ttl">Remanejamentos Seplag</div>

                        <div className="descricoes">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footerDetalhamento">
                    <div className="menssager">
                        Restam <strong>{this.state.NumRemanejamentos}</strong> Remanejamentos para esta semana
                    </div>
                </div>
            </div>
        )
    }
}

