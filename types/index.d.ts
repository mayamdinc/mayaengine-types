import type { ConnectOptions } from "mongoose";
export interface MongooseConfiguration {
    uri: string;
    options: ConnectOptions;
}
export * from "./input";
export * from "./output";
