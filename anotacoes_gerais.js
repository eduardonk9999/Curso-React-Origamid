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