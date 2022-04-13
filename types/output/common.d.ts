import { NamedItem, Insight } from "../common";
import { InputSymptom } from "../input";
import { ApiQuestion } from "./question";
import { ContextOutput } from "./context";
import { AlgorithmSymptom, Symptom } from "./symptom";
declare type Result = NamedItem | Symptom | ApiQuestion | InputSymptom | AlgorithmSymptom | ContextOutput | string;
export interface ApiOutput {
    error: boolean;
    statusMessage?: string[];
    statusCode?: number;
    requestType?: string;
    requestId?: number;
    partType?: string;
    result?: Result[];
    diagnoses?: Diagnosis[];
    triages?: TriageOutput[];
    inferences?: InferenceOutput[];
    recommendation?: Recommendation;
    contexts?: ContextOutput[];
    workup?: Workup[];
    names?: GetNamesOutput;
    interactionId?: string;
}
export interface Workup {
    id: number;
    category: string;
}
export interface GetNamesOutput {
    symptoms?: IdNameMap;
    durations?: IdNameMap;
    qualifiers?: IdNameMap;
    causes?: IdNameMap;
    contexts?: IdNameMap;
    questions?: IdNameMap;
    answers?: IdNameMap;
    physicalExaminations?: IdNameMap;
    labs?: IdNameMap;
    triages?: IdNameMap;
    inferences?: IdNameMap;
    profileFields?: IdNameMap;
    medications?: IdNameMap;
    surgeries?: IdNameMap;
    countries?: IdNameMap;
    geoLocations?: IdNameMap;
    answerFlags?: IdNameMap;
    answerNoteTitles?: IdNameMap;
}
export interface IdNameMap {
    [id: number]: string;
}
export interface InferenceOutput extends NamedItem {
    link: string;
    reference: string;
}
export interface Diagnosis extends NamedItem {
    commonFactor: number;
    symptomCount: number;
    lifeThreatening?: boolean;
    probability?: number;
    insights?: Insight[];
}
export interface TriageOutput extends NamedItem {
    searchTerm?: string;
    type?: string;
}
export interface Recommendation {
    lab: Lab[];
    physicalExamination: PhysicalExamination[];
}
declare type Lab = NamedItem;
declare type PhysicalExamination = NamedItem;
export {};
