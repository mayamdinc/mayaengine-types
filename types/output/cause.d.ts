import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
export interface ApiCauseOutput extends ApiOutput {
    result?: CauseOutput[];
}
export interface CauseOutput extends NamedItem {
    lifeThreatening: number;
    symptoms?: CauseSymptomOutput[];
}
interface CauseSymptomOutput extends NamedItem {
    direct?: number;
    specific?: number;
    cardinal?: number;
}
export {};
