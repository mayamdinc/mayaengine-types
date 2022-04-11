export interface NamedItem {
    id: number;
    name: string;
}
export interface Insight {
    type: string;
    message: string;
    ids?: number[];
    values?: number[];
}
