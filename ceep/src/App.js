import './App.css';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Excreva a sua nota..." />
        <button type="submit">Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
