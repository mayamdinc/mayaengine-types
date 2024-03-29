import { NamedItem } from "../common.js";
import { ApiOutput } from "./common.js";
import { SymptomDuration } from "./symptom.js";
export interface ApiQuestionOutput extends ApiOutput {
    result?: ApiQuestion[];
}
export interface ApiQuestion extends NamedItem {
    answers: ApiAnswerOption[];
    category?: string;
    exclusive?: boolean;
    freeText?: string;
    profileFieldId?: number;
    profileFieldType?: string;
    recommendedLabs?: Lab[];
    recommendedPhysicalExaminations?: PhysicalExamination[];
}
export type Lab = NamedItem;
export type PhysicalExamination = NamedItem;
export interface ApiAnswerOption extends NamedItem {
    sortOrder: number;
    exclusive?: boolean;
    symptomId?: number;
    flag?: string;
    noteTitle?: string;
    symptom?: string;
    durations?: SymptomDuration[];
}
