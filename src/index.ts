
/**
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 *
 * This is the index.ts file that will be compiled to JS and set as the 'main'
 * property in package.json. This makes it possible to use elf-tokenlist as a
 * normal package, ie: import { mainnetTokenList } from 'elf-tokenlist'
 *
 * See scripts/build-index.sh for details.
 *
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 */

import { TokenList } from '@uniswap/token-lists';

// TODO: add this when we have it
// export const mainnetTokenList: TokenList = ;
export const goerliTokenList: TokenList = {
  "name": "Council Goerli token list",
  "logoURI": "https://element.fi/logo.svg",
  "timestamp": "2021-11-15T18:21:42.486Z",
  "version": {
    "major": 0,
    "minor": 1,
    "patch": 0
  },
  "tokens": [
    {
      "chainId": 5,
      "address": "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
      "symbol": "ttk",
      "decimals": 18,
      "name": "testtoken"
    },
    {
      "chainId": 5,
      "address": "0x5264a36f4839F45d753701B5BDFc66c3f4ad2F96",
      "name": "Element Core Voting Contract",
      "decimals": 0,
      "symbol": "",
      "extensions": {
        "dayInBlocks": 6496,
        "baseQuorum": 10000,
        "lockDuration": 19488,
        "minProposalPower": 500,
        "extraVoteTime": 32480
      }
    },
    {
      "chainId": 5,
      "address": "0x43161786d23627C02f7D3AFD20489924b491b009",
      "name": "Element GSC Core Voting Contract",
      "decimals": 0,
      "symbol": "",
      "extensions": {
        "dayInBlocks": 6496,
        "baseQuorum": 5,
        "lockDuration": 19488,
        "minProposalPower": 1,
        "extraVoteTime": 32480
      }
    },
    {
      "chainId": 5,
      "address": "0xeA1f4ec61FEe5a7A6EC1A323e1d042282068a4d9",
      "name": "Element Locking Vault",
      "decimals": 0,
      "symbol": "",
      "extensions": {
        "token": "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
        "staleBlockLag": 100000000
      }
    },
    {
      "chainId": 5,
      "address": "0x40E10a6C50b2Cf77a804aA9e32D69aEc919E3765",
      "name": "Element Vesting Vault",
      "decimals": 0,
      "symbol": "",
      "extensions": {
        "token": "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
        "staleBlockLag": 100000000
      }
    },
    {
      "chainId": 5,
      "address": "0x847D90e827a11Da7c124992905CDf1F03F330fA8",
      "name": "Element Optimistic Rewards Vault",
      "decimals": 0,
      "symbol": "",
      "extensions": {
        "pendingRoot": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "proposalTime": 0,
        "proposer": "0xcF3b7bcBbcEFF836F81f6EAd914706E699267bca",
        "challengePeriod": 604800,
        "rewardsRoot": "0xb3bc27033f96d4ab101b807a06fef330523d308e202f9733d748412c008251aa",
        "lockingVault": "0xA0bfb97aC29Fc4034db52F8783efdaA25A070E1B",
        "token": "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA"
      }
    },
    {
      "chainId": 5,
      "address": "0xf29658584ED4EB1FD22521D5A9437B20c9925dd6",
      "name": "Element Governance Steering Committee Vault",
      "decimals": 0,
      "symbol": "",
      "extensions": {
        "coreVoting": "0x43161786d23627C02f7D3AFD20489924b491b009",
        "votingPowerBound": 500,
        "idleDuration": 345600
      }
    }
  ]
};
