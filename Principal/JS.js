/* Função sortear números */
function SortearNumeros() {
    var numeros = [];

/* O código abaixo irá gerar 6 nuúmeros aleatórios */
    while(numeros.length < 6) {
        var num = Math.floor(Math.random()*61);
        if(!numeros.includes(num)){
            numeros.push(num);
        }
    }

/* O trecho de código abaixo exibirá os números sorteados na página */
    document.getElementById("num1").innerHTML = numeros[0];
    document.getElementById("num2").innerHTML = numeros[1];
    document.getElementById("num3").innerHTML = numeros[2];
    document.getElementById("num4").innerHTML = numeros[3];
    document.getElementById("num5").innerHTML = numeros[4];
    document.getElementById("num6").innerHTML = numeros[5];
}