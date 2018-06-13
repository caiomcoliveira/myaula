export namespace Api {
    export const rootPath = "http://localhost:8100/api/"
    export const turmas: string = rootPath + "turmas/";
    export const login: string = rootPath + "login/";

    export const entrarTurma: string = rootPath+ "adicionar/";
    export const cadastrar: string = rootPath+ "cadastrar/";
    export const usuarioPorMatricula = (matricula: string) => `http://localhost:8100/api/usuario/${matricula}/`;
    

 

}