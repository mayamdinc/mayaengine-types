import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
export interface ApiLabOutput extends ApiOutput {
    result?: LabOutput[];
}
export type LabOutput = NamedItem;
