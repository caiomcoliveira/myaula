import { Questionario } from "./questionario";

export class Turma {
    id: number;
    nome: string;    
    professor: string;
    turma: string;
    questionarios: Questionario[];
}