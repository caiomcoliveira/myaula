export namespace Api {
    export const rootPath = "http://192.168.0.3:8000/api/"
    export const turmas: string = rootPath + "turmas/";
    export const login: string = rootPath + "login/";

    export const entrarTurma: string = rootPath+ "adicionar/";
    export const cadastrar: string = rootPath+ "cadastrar/";
    export const usuarioPorMatricula = (matricula: string) => `http://192.168.0.3:8000/api/usuario/${matricula}/`;
    export const questionario: string = rootPath+ "questionario/";
    

 

}