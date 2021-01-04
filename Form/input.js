/**
 * Reatividade:
 * Para criarmos campos de formulário reativos, devemos definir o estado
 * para value e a função atualizadora para o onChange.
 * Form:
 * No form controlamos o que acontece ao enviar o mesmo, por isso definimos 
 * uma função para lidar com o onSubmit. 
 * 
*/

import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');

  return(
    <form>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.vallue)}
      />
    </form>
  );

}

export default App;