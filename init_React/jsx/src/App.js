

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };


const App = () => {
  const dados = luana;

  const estiloSpan = {
    display: 'block',
    marginTop: '5px'
  }

  return (
    <div>
      <h2>Nome: {dados.cliente}</h2>
      <span>Idade: {dados.idade}</span>
      <span style={estiloSpan} className={dados.ativa ? 'ativo' : 'inativo'}>Situação:{dados.ativa} </span>

      <span>Total gastos: R${dados.compras.filter((p) => p.preco.replace("R$", ''))} </span>
    </div>  
  );
};

export default App;
