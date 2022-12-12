import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
export interface ApiPhysicalExaminationOutput extends ApiOutput {
    result?: PhysicalExaminationOutput[];
}
export type PhysicalExaminationOutput = NamedItem;
