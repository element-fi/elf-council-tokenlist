import { Provider } from '@ethersproject/abstract-provider';
import { CoreVotingContractInfo } from 'src/types';
export declare function getCoreVotingInfo(provider: Provider, chainId: number, tokenAddress: string, name: string): Promise<CoreVotingContractInfo>;
