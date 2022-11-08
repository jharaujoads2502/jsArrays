const notas = [10,6.5,8,7.5];
let total =0 ;

for (let indice = 0; indice < notas.length ; indice ++){
 //   total = notas[indice] + total;
    total += notas[indice] ;
}

console.log(`A média das notas é ${total/notas.length}`);