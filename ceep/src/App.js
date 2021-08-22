import './App.css';
import React, { Component } from "react";
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  criarNota(titulo, texto){
    console.log(`Nova Nota foi criada ${titulo} ${texto}`)
  }

  render() {
    return (
    <section className="conteudo">
      <FormularioCadastro criarNota={this.criarNota} />
      <ListaDeNotas/>
    </section>
  );
  }  
}


export default App;
