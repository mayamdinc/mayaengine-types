import { NamedItem, Insight } from "../common.js";
import { InputSymptom } from "../input.js";
import { ApiQuestion } from "./question.js";
import { ContextOutput } from "./context.js";
import { AlgorithmSymptom, Symptom } from "./symptom.js";
import { Algorithm, ZscoreTables } from "./algorithm.js";
type Result = NamedItem | Symptom | ApiQuestion | InputSymptom | AlgorithmSymptom | ContextOutput | string;
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
    algorithm?: Algorithm;
    zscoreTables?: ZscoreTables;
    zscore?: ZscoreOutput;
}
export interface ZscoreOutput {
    bfa?: number;
    hfa?: number;
    wfa?: number;
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
type Lab = NamedItem;
type PhysicalExamination = NamedItem;
export {};
