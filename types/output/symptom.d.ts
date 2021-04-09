import { NamedItem } from "../common";
import { ApiOutput } from "./common";
export interface ApiSymptomOutput extends ApiOutput {
    result?: Symptom[];
}
export interface Symptom extends NamedItem {
    hasMultipleSymptomReplacement: boolean;
    category?: string;
    durations?: SymptomDuration[];
    qualifiers?: SymptomQualifier[];
    contexts?: SymptomContext[];
    associatedSymptoms?: AssociatedSymptom[];
    symptomExclusions?: SymptomExclusion[];
    pastMedicalHistoryIds?: number[];
}
export declare type SymptomDuration = NamedItem;
export interface SymptomQualifier extends NamedItem {
    durationExclusionIds?: number[];
}
export interface SymptomContext extends NamedItem {
    rank: number;
    preserve: number;
    durationIds?: number[];
    durationExclusionIds?: number[];
}
export interface AssociatedSymptom {
    id: number;
    rank: number;
    specific: number;
    type: number;
    associatedSymptomDuration?: number[];
    symptomExclusions?: number[];
}
declare type SymptomExclusion = NamedItem;
export interface AlgorithmSymptom extends NamedItem {
    alias?: string;
}
export {};
