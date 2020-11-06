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



// Hooks
/** Estado
 * O estado de uma aplicação representa as características dela
 * naquele momento, Por exemplo: os dados do usuário foram
 * carregados, o botão está ativo, o usuário está na página de contato
 * e etc.
 */

 const App = () => {
   const ativo = true;

   return (
    <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
   )
 }


 /**
  * Hooks
  * Os Hooks são funções especiais do React que permitem controlarmos o estado
  * e o ciclo de vida de componentes funcionais. Isso antes só era possível
  * com classes.
  * 
  * UsaState
  *  É uma função que retorna uma Array com 
  *  valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer
  * tipo de dado como strings, arrays, números, boolean, null, undefined e 
  * objetos. O segundoo valor é uma função que pode sr utilizada para
  * modificarmos o estado do primeiro valor.
  * Quando a função de modificação do estado é ativa, todos os componentes que
  * dependerem do estado, serão renderizados novamente e os seus filhos também.
  * É isso que garante a reatividaed de componentes funcionais no React.
  */
const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>  
  )
}


/**
 * Não existem limites para o uso do useState, podemos definir fiversos no mesmo
 * component.
 */
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(ativo);
  const [dados, setDados] = React.useState({ nome: '', idade: '' });

  return <div></div>;
}

/**
 * Reatividade
 * Não modifique o estado diretamente. Utilize sempre a função de atualização
 * do estado, pois ela garante a reatividade dos componentes.
 * 
 */
const App = () => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }

  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Reativo</button>
    </>
  );
};

/**
 * Callback Valor Inicial
 * A definição do estado inicial também pode ser feita com um callback.
 *
 */
const App = () => {
  // Callback no estado inicial, só será executado na criação do componente
  const [ativo, setAtivo] = React.useState(() => {
    const ativoLocal = window.localStorage.getItem('ativo');
    return ativoLocal;
  });

  function handleClick() {
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
};

/**
 * React.StrictMode
 * O modo estrito invoca duas vezes a renderização do componente, 
 * quando o estado é atualizado. Assim é possível identificarmos
 * funções com efeitos coláterais (side effects) e eliminarmos as mesmas.
 * Funções com efeitos coláterais são aquelas que modificam estados 
 * que estão fora das mesmas.
 * 
 */

const Contador = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      // setContar possui um efeito colateral.
      setItems((items) => [...items, 'Item ' + (contar + 1)]);
      return contar + 1;
    });
    // Tirar o efeito de dentro do setContar irá concertar o erro
    // setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};


/*
- useEffect
Todo componente possui um ciclo de vida. Os pprincipais momentos acontecem
quando o componente é renderizado, atualizado ou destruído, Com o
React.useEffect() podemos definir um callback que irá ser executado durante
certos momentos do ciclo de vida do componente.

*/

const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}

//OBS
/*
Ele é executado apenas uma ves quando a [] é passada vazia no final da
função use.Effect, se quisermos executar quando algum estado mudar,
temoos que passar o estado dentro da []
*/
//EX:

const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Ocorre ao renderizar e ao atualizar');
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}


//useRef
/**
 * Retorna um objet com a propriedade current. Esse objeti pode
 * ser utilizado para guardarmos valores que irão persistir durante todo
 * o cuclo de vida do elemento. Geralmente usamos o mesmo para nos refirirmos
 * a um elemento do DOM, sem precisarms utilizar o querySlecot
 * 
 */
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current);
  });

  return <video ref={video} />
}

