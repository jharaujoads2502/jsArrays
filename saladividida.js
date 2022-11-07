const alunos = ['João' , 
             'Juliana', 
             'Ana', 
             'Caio', 
             'Lara', 
             'Marjorie', 
             'Guilherme', 
             'Aline', 
             'Fabiana', 
             'Andre', 
             'Carlos', 
             'Paulo', 
             'Bia', 
             'Vivian', 
             'Isabela', 
             'Vinícius', 
             'Renan', 'Renata', 
             'Daisy', 
             'Camilo'];

alunos.slice(0,10);//o segundo parametro deixa o ultimo de fora
const alunos1 = alunos.slice(0,alunos.length/2);
const alunos2 = alunos.slice(alunos.length/2);//quando não coloca o segundo parametro ele pega o resto

console.log(alunos1);
console.log(alunos2);