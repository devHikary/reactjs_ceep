import React, { Component } from "react"
import CardNota from '../CardNota/CardNota';

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNota/>
        </li>
      </ul >
    );
  }
}