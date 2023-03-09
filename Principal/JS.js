/* Função sortear números */
function SortearNumeros(){
    var numeros [];

/* O código abaixo irá gerar 6 nuúmeros aleatórios */
    while(numeros.leagth < 6){
        var num = Math.floor(Math.random()*61);
        if(!numeros.includes(num)){
            numeros.push(num);
        }
    }

/* O trecho de código abaixo exibirá os números sorteados na página */
    document.getElementById("numero1").innerHTML = numeros[0];
    document.getElementById("numero2").innerHTML = numeros[1];
    document.getElementById("numero3").innerHTML = numeros[2];
    document.getElementById("numero4").innerHTML = numeros[3];
    document.getElementById("numero5").innerHTML = numeros[4];
    document.getElementById("numero6").innerHTML = numeros[5];
}