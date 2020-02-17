import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//Componentes
import Menu from './Components/Menu/Menu';
import SessionOne from './Components/Sessions/SessionOne';
import logo from './img/LogoDDT2.png';
import Index from './Components/Index';
import Footer from './Components/Estrutura/Footer';
//CSS
import './css/estrutura.css';
import Remanejamentos from './Components/Remanejamento/Remanejamentos';




export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let op = [{ text: "Inicio", link: "/" }, { text: "Remanejamentos", link: "Remanejamento" }, { text: "teste", link: "teste" }]
    return (
      <div className="containerInit">
        <BrowserRouter>
          <Menu
            options={op}
            logo={logo}
          />
          <SessionOne />


          <Route path="/" exact={true} component={Index} />
          <Route path="/Remanejamento" component={Remanejamentos} />
          {/* <Route path="/" component={Index} /> */}
        </BrowserRouter>

        <Footer
          logo={logo}
          texto="Diretoria de Desenvolvimento Tecnologico"
        />
      </div>
    )
  }
}
