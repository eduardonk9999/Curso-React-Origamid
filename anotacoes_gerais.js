/*
JSX
- JavaScript XML/ Extension. Estende a sintaxe do JavaScript,
introduzindo elementos como XML que são convertidos em funções de React.

Casos Especiais
- class => className
- for => htmlFor
*/


/*
Arrays
- Key = É um valor único para cada elemento na array

*/
const App() => {
    const filmes = ['Before Sunrise', 'Before Sunset'];

    return (
        <ul>
            {filmes.map((filme) => (
                <li key={filme}>{filme}</li>
            ))}
        </ul>    
    );
};


// Eventos
/*
- Podemos atribuir eventos diretametne aos elementos JSX como
um atributo. Os eventos são sintáticos, ou seja, são criados pelo
próprio React porém seguindo as especificações da W3C e funcionam
igualmetne nos diversos browsers que o React suporta.

Ex
*/

const App = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }
  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>  
  );
};


// Componentes
/*
- O ideal é dividir o aplicativo em pequenos componentes para
facilitar a manutenção do mesmo, Iremos trabalhar durante o curso com
os componentes funcionais.
*/

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
        <p> Esse é o aplicativo</p>
      <Footer />
    </div>  
  )
}