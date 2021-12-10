import { Provider } from "@ethersproject/abstract-provider";
import { LockingVaultInfo } from "src/types";
export declare function getLockingVaultInfo(provider: Provider, chainId: number, tokenAddress: string, name: string): Promise<LockingVaultInfo>;
