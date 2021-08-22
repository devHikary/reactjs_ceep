import React, { Component } from "react"
import CardNota from '../CardNota/CardNota';

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}