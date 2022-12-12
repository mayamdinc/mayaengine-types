import type { Zscore } from "../zscore";
export interface Algorithm {
    symptoms: number[];
    hash: string;
    date: Date;
    data: AlgorithmData;
}
export interface ZscoreTables {
    hash: string;
    date: Date;
    data: Zscore;
}
export interface AlgorithmData {
    questions: AlgorithmQuestionNode[];
    inferences?: AlgorithmInferenceNode[];
}
interface Node {
    conditions: AlgorithmConditions;
}
export interface AlgorithmQuestionNode extends Node {
    questions: AlgorithmQuestion[];
}
export interface AlgorithmInferenceNode extends Node {
    inferences: AlgorithmInference[];
}
export interface AlgorithmConditions {
    symptomConditions: AlgorithmSymptomCondition;
    questionConditions?: AlgorithmQuestionsCondition;
    profileFieldConditions?: AlgorithmRulesCondition;
    labConditions?: AlgorithmRulesCondition;
}
export interface AlgorithmSymptomCondition {
    logic: string;
    symptoms: number[];
}
export interface AlgorithmQuestionsCondition {
    logic: string;
    questionRules: AlgorithmQuestionAnswers[];
}
export interface AlgorithmQuestionAnswers {
    id: number;
    logic?: string;
    answers?: number[];
}
export interface AlgorithmRulesCondition {
    logic: string;
    rules: AlgorithmRule[];
}
export interface AlgorithmRule {
    id: number;
    conditions: AlgorithmRuleCondition[];
    unit?: number;
}
interface AlgorithmRuleCondition {
    op: string;
    value: number | string;
}
export interface AlgorithmQuestion {
    id: number;
    rank: number;
}
export interface AlgorithmInference {
    id: number;
    sortOrder: number;
}
export interface IdBooleanMap {
    [id: number]: boolean;
}
export {};
