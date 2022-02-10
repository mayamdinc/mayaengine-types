import { NamedItem } from "../common";
import { ApiOutput } from "./common";
export interface ApiLabOutput extends ApiOutput {
    result?: LabOutput[];
}
export declare type LabOutput = NamedItem;
