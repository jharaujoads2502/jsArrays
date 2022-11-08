const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10,8,7.5,9];
const listaDeAlunosEMedias = [alunos,medias];

function exibeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){

        const [alunos, medias]= listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(indice);
        console.log(`${aluno} Encontrado`);
        console.log(`Sua nota é ${mediaDoAluno}`)
    }else{
        console.log(`${aluno} Não encontrado`);
    }


}

exibeENota("Juliana");