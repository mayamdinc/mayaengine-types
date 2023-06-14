import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
export interface ApiSymptomOutput extends ApiOutput {
    result?: Symptom[];
}
export interface Symptom extends NamedItem {
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
    durationExclusionIds?: number[];
    exclusive?: boolean;
}
export interface SymptomContext extends NamedItem {
    rank: number;
    preserve: number;
    ivrExclude: number;
    durationIds?: number[];
    durationExclusionIds?: number[];
}
export interface AssociatedSymptom {
    id: number;
    rank: number;
    specific: number;
    type: number;
    ivrExclude: number;
    associatedSymptomDuration?: number[];
    symptomExclusions?: number[];
}
type SymptomExclusion = NamedItem;
export interface AlgorithmSymptom extends NamedItem {
    alias?: string;
}
export {};
