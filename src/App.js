import React, { Component } from 'react'
import './css/estrutura.css';
import Menu from './Components/Menu/Menu';
import SessionOne from './Components/Sessions/SessionOne';
import logo from './img/LogoDDT2.png';
import Index from './Components/Index';
import Footer from './Components/Estrutura/Footer';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let op = [{ text: "teste", component: "teste" }, { text: "teste", component: "teste" }, { text: "teste", component: "teste" }]
    return (
      <div className="containerInit">
        <Menu
          options={op}
          logo={logo}
        />

        <SessionOne />
        <Index />
        <Footer
          logo={logo}
          texto="Diretoria de Desenvolvimento Tecnologico"
        />
      </div>
    )
  }
}
