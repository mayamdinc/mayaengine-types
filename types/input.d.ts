export interface ApiParams {
    requestType: string;
    requestId?: number;
    clientId?: number;
    partial?: boolean;
    language?: string;
    layperson?: boolean;
    algorithm?: boolean;
    excludingSex?: string;
    appName?: string;
    sessionId?: string;
    apiKey?: string;
    apiSecret?: string;
    contextOnly?: boolean;
    term?: string;
    ids?: number[];
    category?: string[];
    preop?: boolean;
    symptoms?: InputSymptom[];
    anatomy?: string;
    profile?: PatientProfile;
    input?: ApiInput;
    debugAlgo?: string;
    nameOnly?: boolean;
    userIp?: string;
    userInteractionId?: string;
    idsForNames?: GetNamesInput;
    all?: boolean;
    max?: number;
}
export interface ApiInput {
    age?: number;
    sex?: string;
    bmi?: number;
    countryName?: string;
    symptoms?: InputSymptom[];
    negativeAssociatedSymptoms?: number[];
    pastMedicalHistory?: number[];
    negativePastMedicalHistory?: number[];
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
export interface PatientProfile {
    age?: number;
    sex?: string;
    bmi?: number;
}
export interface GetNamesInput {
    symptoms?: number[];
    durations?: number[];
    qualifiers?: number[];
    causes?: number[];
    contexts?: number[];
    questions?: number[];
    answers?: number[];
    physicalExaminations?: number[];
    labs?: number[];
    triages?: number[];
    inferences?: number[];
    profileFields: number[];
    medications: number[];
    surgeries: number[];
    countries: number[];
    geoLocations: number[];
}
