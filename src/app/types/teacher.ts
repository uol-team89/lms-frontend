import { ISubject } from "./subject";

export interface ITeacher {
    id?: number,
    name?: string,
    subjects?: ISubject[]
}