const notas = [10,6.5,8,7.5];
let total = 0;

for (let elemento of notas){
    total += elemento
    
}


console.log(`A média das notas é ${total/notas.length}`);