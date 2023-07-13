import { AulaModel } from "./aula-model";
import { DocenteModel } from "./docente-model";
import { StudenteModel } from "./studente.model";

export class CorsoModel{
    chiave?: number;
    oDocente!: DocenteModel;
    oAula!: AulaModel;
    corso!: string;
    durata!: string;
    dataInizio!: Date;
    partecipanti!: [StudenteModel];
}