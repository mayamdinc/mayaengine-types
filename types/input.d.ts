export interface ApiParams {
    requestType: string;
    requestId?: number;
    partial?: boolean;
    language?: string;
    layperson?: boolean;
    algorithm?: boolean;
    excludingSex?: string;
    appName?: string;
    sessionId?: string;
    apiKey?: string;
    apiSecret?: string;
    diagnostic?: boolean;
    contextOnly?: boolean;
    term?: string;
    ids?: number[];
    category?: string;
    preop?: boolean;
    symptoms?: InputSymptom[];
    anatomy?: string;
    profile?: PatientProfile;
    input?: ApiInput;
    debugAlgo?: string;
}
export interface ApiInput {
    age?: number;
    sex?: string;
    countryName?: string;
    symptoms?: InputSymptom[];
    pastMedicalHistory?: number[];
    contexts?: number[];
    negativeContexts?: number[];
    questionAnswers?: ApiInputQuestionAnswers;
    freeTextAnswers?: ApiInputFreeTextAnswers;
    medications?: number[];
    surgeries?: number[];
}
export interface InputSymptom {
    id: number;
    duration?: number;
    qualifiers?: number[];
}
export interface ApiInputQuestionAnswers {
    [questionId: string]: ApiInputAnswer;
}
export interface ApiInputAnswer {
    [answerId: string]: number;
}
export interface ApiInputFreeTextAnswers {
    [questionId: string]: string;
}
interface PatientProfile {
    age: number;
    sex: string;
}
export {};
