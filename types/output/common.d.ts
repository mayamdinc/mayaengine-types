import { NamedItem } from "../common";
import { InputSymptom } from "../input";
import { ApiQuestion } from "./question";
import { ContextOutput } from "./context";
import { AlgorithmSymptom, Symptom } from "./symptom";
declare type Result = NamedItem | Symptom | ApiQuestion | InputSymptom | AlgorithmSymptom | ContextOutput;
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
}
export interface Workup {
    id: number;
    category: string;
}
export interface InferenceOutput {
    name: string;
    link: string;
    reference: string;
}
export interface Diagnosis extends NamedItem {
    commonFactor: number;
    symptomCount: number;
    lifeThreatening?: boolean;
    probability?: number;
    insight?: string[];
}
export interface TriageOutput {
    name: string;
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
