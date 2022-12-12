export interface Zscore {
    [sex: string]: ZscoreSex;
}
interface ZscoreSex {
    [mode: string]: ZscoreMode;
}
interface ZscoreMode {
    [zType: string]: ZscoreValues;
}
interface ZscoreValues {
    [age: number]: number[];
}
export {};
