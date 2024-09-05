async function getWeather() {

    //Variavel que pega o valor do (input cidade)
    var cidade = document.getElementById('cidade').value

    //Conectando a API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variavel para consumir o JSON do item temperatura
    var TempCelsius = resposta.data.main.temp;

    //Imprimir no console do site
    console.log(TempCelsius)

    //Imprimir na tela FRONT END (utilizando JQUERY)
    document.getElementById('temperatura').innerHTML = `A temperatura atual ${cidade} é : ${TempCelsius.toFixed(0)} °C` 
}

//Chamar a Função
getWeather()


fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(resposta => {
    return resposta.json();
}).then(economia => {
    console.log(economia);
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('valorDolarHigh').innerHTML = economia.USDBRL.high;
    document.getElementById('valorDolarLow').innerHTML = economia.USDBRL.low;
});




//preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}
//autopreenchimento
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return false;
    }
}
//buscar API
//Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.
const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
            preencherFormulario(endereco);
        }
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);