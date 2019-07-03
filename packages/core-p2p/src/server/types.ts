import { Database } from "@blockpool-io/core-interfaces";
import { models } from "@blockpool-io/crypto";

export interface IResponse<T> {
    data: T;
}

export interface ICurrentRound {
    current: number;
    reward: string;
    timestamp: number;
    delegates: Database.IDelegateWallet[];
    currentForger: Database.IDelegateWallet;
    nextForger: Database.IDelegateWallet;
    lastBlock: models.IBlockData;
    canForge: boolean;
}
export interface IForgingTransactions {
    transactions: string[];
    poolSize: number;
    count: number;
}
