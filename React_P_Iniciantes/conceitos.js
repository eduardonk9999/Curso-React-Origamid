/*
 React Element
 - Todo elemento React é criado com a função createElement. O Babel é
 o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.
 */

 // Html JS 
 function App() {
     return <div id="container">Meu App</div>;
 }


 // React
function App() {
    return React.createElement('div', { id: 'container' }, 'Meu App');
}


// Componentes
/*
 - Permitem você dividir a sua interface em pequenos elementos. São
 criados através de funções que retornam elementos React ou classes que
 estendem React.Component e possuem o método render retornando um 
 elemento React.
*/


// Function Component
const Button = () => {
    return <button>Comprar</button>;
  };
  
  // Class Component
  class Button extends React.Component {
    render() {
      return <button>Comprar</button>;
    }
  }


  // Composição
  /*
  - O principal motivo de criarmos componentes é para podermos
  compor a interface com diversos componentes que podem ser reutilizados.
  */
 const Button = () => {
    return <button>Comprar</button>;
  };
  
  const MainNav = () => {
    return (
      <nav>
        <a href="#">Link 1</a>
        <Button />
      </nav>
    );
  };
  
  const App = () => {
    return (
      <div>
        <MainNav />
        <Button />
      </div>
    );
  };

  // Hooks
  /*
   - Utilizamos o React pela facilidade de sincronização do estado.
   Antes dos Hooks, isso só era possível em componentes criados por meio de classes.
  */

 const Compras = () => {
    // useState é um Hook que define uma variável reativa
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Comprar: {count}</button>
        <p>Total: {count}</p>
        <p>Preço: R$ {count * 250}</p>
      </div>
    );
  };