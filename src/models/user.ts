import { Turma } from './turma';
export class User {
    id: number;
    email: string;
    matricula: string;
    senha: string;
    tipo: string;
    nome: string;
    turmas: Turma[];
}

