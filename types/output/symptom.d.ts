import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
export interface ApiSymptomOutput extends ApiOutput {
    result?: Symptom[];
}
export interface Symptom extends NamedItem {
    er: number;
    specific?: boolean;
    hasMultipleSymptomReplacement?: boolean;
    category?: string;
    durations?: SymptomDuration[];
    qualifiers?: SymptomQualifier[];
    contexts?: SymptomContext[];
    associatedSymptoms?: AssociatedSymptom[];
    symptomExclusions?: SymptomExclusion[];
    pastMedicalHistoryIds?: number[];
}
export type SymptomDuration = NamedItem;
export interface SymptomQualifier extends NamedItem {
    ivrInclude: number;
    durationExclusionIds?: number[];
    exclusive?: boolean;
}
export interface SymptomContext extends NamedItem {
    rank: number;
    preserve: number;
    ivrInclude: number;
    durationIds?: number[];
    durationExclusionIds?: number[];
}
export interface AssociatedSymptom {
    id: number;
    rank: number;
    specific: number;
    type: number;
    ivrInclude: number;
    associatedSymptomDuration?: number[];
    symptomExclusions?: number[];
}
type SymptomExclusion = NamedItem;
export interface AlgorithmSymptom extends NamedItem {
    alias?: string;
}
export {};
