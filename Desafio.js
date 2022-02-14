/*Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".*/

function compara(n1, n2) {
    const fraseInicial = funcaoPrimeiraFrase(n1, n2);
    const segundaFrase = funcaoSegundaFrase(n1, n2);
    return `${fraseInicial} ${segundaFrase}`;
}

function funcaoPrimeiraFrase(n1, n2) {
    let saoIguais = '';
    if (n1 !== n2) {
        saoIguais = 'não';
    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`;
}

function funcaoSegundaFrase(n1, n2) {
    const soma = n1 + n2;
    let tamanho10 = 'menor';
    let tamanho20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    if (compara10) {
        tamanho10 = 'maior';
    }
    if (compara20) {
        tamanho20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${tamanho10} que 10 e ${tamanho20} que 20`;

}

console.log(compara(1, 10));