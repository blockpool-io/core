import { Database } from "@blockpool-io/core-interfaces";

export interface IMigration {
    id: number;
    name: string;
}

export interface IColumnDescriptor {
    name: string;
    supportedOperators?: Database.SearchOperator[];
    prop?: string;
    init?: any;
    def?: any;
}
