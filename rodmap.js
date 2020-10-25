// REST
/*... está pegando todos os itens da ShowList e colocando na array clientes */
function showList(empresa, ...clientes){
    clientes.forEach((cliente) => {
        console.log(cliente, empresa)
    })
}

showList('Google', 'Andre', 'Rafael');


// SPRED
/* Se tentarmos usar a array numeros Math.max(numeros);, não vai rolar, pois o Math precisa dos numeros, ali ele está recebendo uma array de numeros
Entao com o spred ... ele espalha os itens da array

*/
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const maior = Math.max(...numeros);

console.log(maior)