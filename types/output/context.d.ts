import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
export interface ApiContextOutput extends ApiOutput {
    result?: ContextOutput[];
}
export type ContextOutput = NamedItem;
