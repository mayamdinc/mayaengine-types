import { NamedItem } from "../common";
import { ApiOutput } from "./common";
export interface ApiCauseOutput extends ApiOutput {
    result?: CauseOutput[];
}
export interface CauseOutput extends NamedItem {
    symptoms?: CauseSymptomOutput[];
}
interface CauseSymptomOutput extends NamedItem {
    direct?: number;
    specific?: number;
    cardinal?: number;
}
export {};
