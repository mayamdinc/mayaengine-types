import { NamedItem } from "../common";
import { ApiOutput } from "./common";
export interface ApiPhysicalExaminationOutput extends ApiOutput {
    result?: PhysicalExaminationOutput[];
}
export declare type PhysicalExaminationOutput = NamedItem;
