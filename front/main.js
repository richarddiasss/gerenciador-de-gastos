
async function carregarPagina (){

    const endPoint = "http://localhost:3000/compras";
    try {
        const response = await fetch(endPoint);
        //console.log(response);
        const data = await response.json();
        obterGastos(data);
        carregarSaldo();
        
    } catch (error) {
        console.log("Errouuuu");
    }
    
}

carregarPagina();

function obterGastos(gastos) {
    gastos.forEach( (gasto) => {
        let elemento = document.createElement("div");
        let preco = document.createElement("p");
        let descricao = document.createElement("p");
        let texto = document.createTextNode("preço: "+ gasto.preco + " Reais");
        preco.appendChild(texto);
        texto = document.createTextNode("Descrição: " + gasto.descricao);
        descricao.appendChild(texto);
        elemento.appendChild(preco);
        elemento.appendChild(descricao);
        document.getElementById("principal").appendChild(elemento);
        
    });
}
 
/* 
function implementar() {
    let elemento = document.createElement("div");
    let nome = document.createElement("p");
    let idade = document.createElement("p");
    let texto = document.createTextNode("Richard Dias");
    elemento.appendChild(texto);
    document.getElementById("principal").appendChild(elemento);
}
*/

async function obterSaldo () {
    const endPoint = "http://localhost:3000/saldo";
    try {
        const response = await fetch(endPoint);
        const data = await response.json();
        const objetoValor = data[0];
        return objetoValor;

    } catch (error) {
        console.error({ message: error.message}, "Erroooo");
    }

}

async function carregarSaldo () {

    const objetoValor =  await obterSaldo();
    const valor = objetoValor.valor;
    let elemento = document.createElement("h2");
    let texto = document.createTextNode(`R$ ${valor}`);
    elemento.appendChild(texto);
    document.getElementById("meuDinheiro").appendChild(elemento);
    
}


async function validarCompra () {
    const endPoint = "http://localhost:3000/compras";

    let inputPreco = document.querySelector("input#valorGasto");
    let inputDescricao = document.querySelector("input#descricaoGasto");
    let precoNumber = Number(inputPreco.value);
    let descricaoString = inputDescricao.value;
    
    try {
        
        if( await modificarSaldo(precoNumber) == 0){
            console.log("saldo insuficiente ou preco negativa.");
            //jogarHTML();
            return 0;
        }


        const response = await fetch(endPoint, {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                preco: precoNumber,
                descricao: descricaoString
            })
        });

        const data = response.json;
        console.log("Sucesso", data);

        carregarPagina();

    } catch (error) {
        console.error("Errouuu", error);
    }


}

async function modificarSaldo(preco) {

    const objetoValor = await obterSaldo();
    const idSaldo = objetoValor._id;
    const saldoAnterior = objetoValor.valor;
    console.log(idSaldo);
    const endPoint = `http://localhost:3000/saldo/${idSaldo}`;
    try {;

        const saldoAtual = saldoAnterior - preco;
        console.log(saldoAnterior, preco);
        console.log(saldoAtual);
        if(saldoAnterior < preco || preco < 0){
            return 0;
        }
        console.log("teste 1");
        const response = await fetch(endPoint, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                valor: saldoAtual
            })
        });
        console.log("teste 2");

    } catch (error) {
        console.error("Errouuu", error);
    }
}

async function adicionarSaldo() {
    const objetoValor = await obterSaldo();
    const idSaldo = objetoValor._id;
    const saldoAnterior = objetoValor.valor;
    const endPoint = `http://localhost:3000/saldo/${idSaldo}`;

    //obter recarga do html...
    const inputSaldo = document.getElementById("adSaldo");
    const recarga = Number(inputSaldo.value);

    try {

        const saldoAtual = saldoAnterior + recarga;
        console.log(saldoAnterior, recarga);
        console.log(saldoAtual);
        if(recarga < 0){
            console.log("não é aceito valores negativos");
            return 0;
        }

        console.log("teste 1");
        const response = await fetch(endPoint, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                valor: saldoAtual
            })
        });
        console.log("teste 2");

    } catch (error) {
        console.error("Errouuu", error);
    }
}

