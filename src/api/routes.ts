export namespace Api {
    export const rootPath = "http://localhost:8100/api/"
    export const alunos: string = rootPath + "alunos/";
    export const turmas: string = rootPath + "turmas/";
    export const entrarTurma: string = rootPath+ "adicionar/";
    export const alunoPorMatricula = (matricula: string) => `http://localhost:8100/api/aluno/${matricula}/`;
    

 

}