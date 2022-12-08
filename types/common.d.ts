export interface NamedItem {
    id: number;
    name: string;
}
export interface SearchItem extends NamedItem {
    synonym_id?: number;
    alias?: boolean;
}
export interface Insight {
    type: string;
    message: string;
    ids?: number[];
    values?: number[];
}
