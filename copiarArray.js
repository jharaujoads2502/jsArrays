const notas = [7,7,8,9];
const novasNotas = [...notas,10];//apontando para o mesmo endereço de memória, se eu altera um o outro será alterado
/// ... operador de espalhamento ou seja vai copiar para outro local de memória


console.log(`As novas notas são ${novasNotas}`);
console.log(`As originais notas são ${notas}`);
