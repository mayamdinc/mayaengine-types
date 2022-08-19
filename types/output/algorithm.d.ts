export interface Algorithm {
    symptoms: number[];
    hash: string;
    date: Date;
    data: AlgorithmData;
}
export interface AlgorithmData {
    questions: AlgorithmQuestionNode[];
    inferences?: AlgorithmInferenceNode[];
}
interface Node {
    conditions?: AlgorithmConditions;
}
export interface AlgorithmQuestionNode extends Node {
    questions: AlgorithmQuestion[];
}
export interface AlgorithmInferenceNode extends Node {
    inferences: AlgorithmInference[];
}
export interface AlgorithmConditions {
    questionConditions?: AlgorithmQuestionsCondition;
    profileFieldConditions?: AlgorithmRulesCondition;
    labConditions?: AlgorithmRulesCondition;
}
export interface AlgorithmQuestionsCondition {
    logic: string;
    questionRules: AlgorithmQuestionAnswers[];
}
interface AlgorithmQuestionAnswers {
    id: number;
    logic: string;
    answers: number[];
}
export interface AlgorithmRulesCondition {
    logic: string;
    rules: AlgorithmRule[];
}
export interface AlgorithmRule {
    id: number;
    conditions: AlgorithmRuleCondition[];
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
export interface ProfileData {
    [id: number]: number | string;
}
export {};