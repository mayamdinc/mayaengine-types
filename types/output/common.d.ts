import { NamedItem } from "../common";
import { InputSymptom } from "../input";
import { ApiQuestion } from "./question";
import { ContextOutput } from "./context";
import { AlgorithmSymptom, Symptom } from "./symptom";
declare type Result = Symptom | ApiQuestion | InputSymptom | AlgorithmSymptom | ContextOutput;
export interface ApiOutput {
    error: boolean;
    statusMessage?: string[];
    statusCode?: number;
    requestType?: string;
    requestId?: number;
    result?: Result[];
    workup?: Workup[];
    inferences?: InferenceOutput[];
    diagnoses?: Diagnosis[];
    triages?: TriageOutput[];
    recommendation?: Recommendation;
    contexts?: ContextOutput[];
}
export interface Workup {
    id: number;
    rank: number;
}
export interface InferenceOutput {
    name: string;
    link: string;
    reference: string;
}
export interface Diagnosis extends NamedItem {
    lifeThreatening?: boolean;
    probability?: number;
}
export interface TriageOutput {
    name: string;
    searchTerm?: string;
}
export interface Recommendation {
    lab: Lab[];
    physicalExamination: PhysicalExamination[];
}
declare type Lab = NamedItem;
declare type PhysicalExamination = NamedItem;
export {};
