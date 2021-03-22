import { NamedItem } from "../common";
import { ApiOutput } from "./common";
export interface ApiContextOutput extends ApiOutput {
    result?: ContextOutput[];
}
export declare type ContextOutput = NamedItem;
