import { NamedItem } from "../common";
import { ApiOutput } from "./common";
import { SymptomDuration } from "./symptom";
export interface ApiQuestionOutput extends ApiOutput {
    result?: ApiQuestion[];
}
export interface ApiQuestion extends NamedItem {
    answers: ApiAnswerOption[];
    category?: string;
    exclusive?: boolean;
    freeText?: boolean;
    recommendedLabs?: Lab[];
    recommendedPhysicalExaminations?: PhysicalExamination[];
}
export declare type Lab = NamedItem;
export declare type PhysicalExamination = NamedItem;
export interface ApiAnswerOption extends NamedItem {
    sortOrder: number;
    exclusive?: boolean;
    red?: boolean;
    symptomId?: number;
    noteTitle?: string;
    symptom?: string;
    durations?: SymptomDuration[];
}
