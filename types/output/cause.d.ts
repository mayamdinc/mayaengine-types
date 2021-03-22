import { NamedItem } from "../common";
import { ApiOutput } from "./common";
export interface ApiCauseOutput extends ApiOutput {
    result?: CauseOutput[];
}
export declare type CauseOutput = NamedItem;
