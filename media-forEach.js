const medias = [10,8,7.5,9];

let somaDasNotas = 0;
medias.forEach(function (nota){//o que passar como parametro ele vai ser o elemento
    somaDasNotas += nota;
});


console.log(`A média das notas é ${somaDasNotas/medias.length}`);