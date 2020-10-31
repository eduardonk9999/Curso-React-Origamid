/**
 *  Propriedade
 * Assim como uma função pode receber argumentos, podemos
 * também passar argumentos aos componentes, Esses são
 * conhecimentos como propriedades ou props.
 * 
 * 
 * 
 */

 const Titulo = (props) => {
   return <h1>{props.texto}</h1>;
 };

 const App = () => {
   return (
     <sectio>
       <Titulo texto="Meu Primeiro Título" />
       <Titulo texto="Meu Segundo Título" />
     </sectio>
   );
 };