/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MasterChef, MasterChefInterface } from "../MasterChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract CakeToken",
        name: "_cake",
        type: "address",
      },
      {
        internalType: "contract SyrupBar",
        name: "_syrup",
        type: "address",
      },
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cakePerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IBEP20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cake",
    outputs: [
      {
        internalType: "contract CakeToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cakePerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_devaddr",
        type: "address",
      },
    ],
    name: "dev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "devaddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "enterStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "leaveStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "migrator",
    outputs: [
      {
        internalType: "contract IMigratorChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingCake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accCakePerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMigratorChef",
        name: "_migrator",
        type: "address",
      },
    ],
    name: "setMigrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "syrup",
    outputs: [
      {
        internalType: "contract SyrupBar",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "multiplierNumber",
        type: "uint256",
      },
    ],
    name: "updateMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600555600060095534801561001a57600080fd5b506040516122f73803806122f7833981810160405260a081101561003d57600080fd5b5080516020820151604083015160608401516080909401519293919290919060006100666101e0565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b03199081166001600160a01b03978816908117835560028054831697891697909717909655600380548216958816959095179094556004928355600a829055604080516080810182529586526103e86020870181815291870193845260006060880181815260078054958601815590915296517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688939095029283018054909616949097169390931790935590517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c689830155517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68a82015590517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68b909101556009556101e4565b3390565b612104806101f36000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80635ffe6146116101045780638d88a90e116100a2578063d49e77cd11610071578063d49e77cd146104b1578063dce17484146104b9578063e2bbb158146104c1578063f2fde38b146104e4576101cf565b80638d88a90e1461041b5780638da5cb5b146104415780638dbb1e3a1461044957806393f1a40b1461046c576101cf565b8063715018a6116100de578063715018a6146103df5780637cd07e47146103e757806386a952c41461040b5780638aa2855014610413576101cf565b80635ffe61461461038f578063630b5ba1146103ac57806364482f79146103b4576101cf565b806323cf311811610171578063454b06081161014b578063454b06081461033057806348cd4cb11461034d57806351eb05a6146103555780635312ea8e14610372576101cf565b806323cf3118146102ca57806341441d3b146102f0578063441a3e701461030d576101cf565b80631175a1dd116101ad5780631175a1dd146102155780631526fe271461024157806317caf6f11461028e5780631eaaa04514610296576101cf565b80630755e0b6146101d4578063081e3eda146101ee5780631058d281146101f6575b600080fd5b6101dc61050a565b60408051918252519081900360200190f35b6101dc610510565b6102136004803603602081101561020c57600080fd5b5035610516565b005b6101dc6004803603604081101561022b57600080fd5b50803590602001356001600160a01b03166106fa565b61025e6004803603602081101561025757600080fd5b5035610864565b604080516001600160a01b0390951685526020850193909352838301919091526060830152519081900360800190f35b6101dc6108a5565b610213600480360360608110156102ac57600080fd5b508035906001600160a01b03602082013516906040013515156108ab565b610213600480360360208110156102e057600080fd5b50356001600160a01b0316610a31565b6102136004803603602081101561030657600080fd5b5035610aab565b6102136004803603604081101561032357600080fd5b5080359060200135610c3f565b6102136004803603602081101561034657600080fd5b5035610de4565b6101dc611040565b6102136004803603602081101561036b57600080fd5b5035611046565b6102136004803603602081101561038857600080fd5b503561126c565b610213600480360360208110156103a557600080fd5b5035611307565b610213611364565b610213600480360360608110156103ca57600080fd5b50803590602081013590604001351515611387565b610213611464565b6103ef611506565b604080516001600160a01b039092168252519081900360200190f35b6103ef611515565b6101dc611524565b6102136004803603602081101561043157600080fd5b50356001600160a01b031661152a565b6103ef611597565b6101dc6004803603604081101561045f57600080fd5b50803590602001356115a6565b6104986004803603604081101561048257600080fd5b50803590602001356001600160a01b03166115c1565b6040805192835260208301919091528051918290030190f35b6103ef6115e5565b6103ef6115f4565b610213600480360360408110156104d757600080fd5b5080359060200135611603565b610213600480360360208110156104fa57600080fd5b50356001600160a01b0316611767565b60045481565b60075490565b6000600760008154811061052657fe5b600091825260208083203384527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c790915260409092208054600490920290920192508311156105b1576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b6105bb6000611046565b60006105f582600101546105ef64e8d4a510006105e9876003015487600001546117c890919063ffffffff16565b90611821565b90611863565b905080156106075761060733826118a5565b83156106315781546106199085611863565b82558254610631906001600160a01b03163386611916565b6003830154825461064c9164e8d4a51000916105e9916117c8565b600183015560025460408051632770a7eb60e21b81523360048201526024810187905290516001600160a01b0390921691639dc29fac9160448082019260009290919082900301818387803b1580156106a457600080fd5b505af11580156106b8573d6000803e3d6000fd5b5050604080518781529051600093503392507ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a350505050565b6000806007848154811061070a57fe5b600091825260208083208784526008825260408085206001600160a01b03898116875290845281862060049586029093016003810154815484516370a0823160e01b81523098810198909852935191985093969395939492909116926370a08231926024808301939192829003018186803b15801561078857600080fd5b505afa15801561079c573d6000803e3d6000fd5b505050506040513d60208110156107b257600080fd5b50516002850154909150431180156107c957508015155b1561082f5760006107de8560020154436115a6565b9050600061080b6009546105e98860010154610805600454876117c890919063ffffffff16565b906117c8565b905061082a610823846105e98464e8d4a510006117c8565b859061196d565b935050505b61085783600101546105ef64e8d4a510006105e98688600001546117c890919063ffffffff16565b9450505050505b92915050565b6007818154811061087157fe5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b60095481565b6108b36119c7565b6000546001600160a01b03908116911614610903576040805162461bcd60e51b815260206004820181905260248201526000805160206120af833981519152604482015290519081900360640190fd5b801561091157610911611364565b6000600a54431161092457600a54610926565b435b600954909150610936908561196d565b600955604080516080810182526001600160a01b0385811682526020820187815292820184815260006060840181815260078054600181018255925293517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688600490920291820180546001600160a01b031916919094161790925592517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68982015591517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68a830155517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68b90910155610a2b6119cb565b50505050565b610a396119c7565b6000546001600160a01b03908116911614610a89576040805162461bcd60e51b815260206004820181905260248201526000805160206120af833981519152604482015290519081900360640190fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b60006007600081548110610abb57fe5b600091825260208083203384527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c790915260408320600490920201925090610b0290611046565b805415610b4b576000610b3782600101546105ef64e8d4a510006105e9876003015487600001546117c890919063ffffffff16565b90508015610b4957610b4933826118a5565b505b8215610b77578154610b68906001600160a01b0316333086611a90565b8054610b74908461196d565b81555b60038201548154610b929164e8d4a51000916105e9916117c8565b6001820155600254604080516340c10f1960e01b81523360048201526024810186905290516001600160a01b03909216916340c10f199160448082019260009290919082900301818387803b158015610bea57600080fd5b505af1158015610bfe573d6000803e3d6000fd5b5050604080518681529051600093503392507f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a3505050565b81610c91576040805162461bcd60e51b815260206004820152601a60248201527f77697468647261772043414b4520627920756e7374616b696e67000000000000604482015290519081900360640190fd5b600060078381548110610ca057fe5b600091825260208083208684526008825260408085203386529092529220805460049092029092019250831115610d13576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b610d1c84611046565b6000610d4a82600101546105ef64e8d4a510006105e9876003015487600001546117c890919063ffffffff16565b90508015610d5c57610d5c33826118a5565b8315610d86578154610d6e9085611863565b82558254610d86906001600160a01b03163386611916565b60038301548254610da19164e8d4a51000916105e9916117c8565b6001830155604080518581529051869133917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a35050505050565b6006546001600160a01b0316610e38576040805162461bcd60e51b815260206004820152601460248201527336b4b3b930ba329d1037379036b4b3b930ba37b960611b604482015290519081900360640190fd5b600060078281548110610e4757fe5b600091825260208083206004928302018054604080516370a0823160e01b81523095810195909552519195506001600160a01b0316939284926370a0823192602480840193829003018186803b158015610ea057600080fd5b505afa158015610eb4573d6000803e3d6000fd5b505050506040513d6020811015610eca57600080fd5b5051600654909150610ee9906001600160a01b03848116911683611aea565b6006546040805163ce5494bb60e01b81526001600160a01b0385811660048301529151600093929092169163ce5494bb9160248082019260209290919082900301818787803b158015610f3b57600080fd5b505af1158015610f4f573d6000803e3d6000fd5b505050506040513d6020811015610f6557600080fd5b5051604080516370a0823160e01b815230600482015290519192506001600160a01b038316916370a0823191602480820192602092909190829003018186803b158015610fb157600080fd5b505afa158015610fc5573d6000803e3d6000fd5b505050506040513d6020811015610fdb57600080fd5b5051821461101f576040805162461bcd60e51b815260206004820152600c60248201526b1b5a59dc985d194e8818985960a21b604482015290519081900360640190fd5b83546001600160a01b0319166001600160a01b039190911617909255505050565b600a5481565b60006007828154811061105557fe5b90600052602060002090600402019050806002015443116110765750611269565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156110c057600080fd5b505afa1580156110d4573d6000803e3d6000fd5b505050506040513d60208110156110ea57600080fd5b5051905080611100575043600290910155611269565b60006111108360020154436115a6565b905060006111376009546105e98660010154610805600454876117c890919063ffffffff16565b6001546003549192506001600160a01b03908116916340c10f19911661115e84600a611821565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156111a457600080fd5b505af11580156111b8573d6000803e3d6000fd5b5050600154600254604080516340c10f1960e01b81526001600160a01b0392831660048201526024810187905290519190921693506340c10f199250604480830192600092919082900301818387803b15801561121457600080fd5b505af1158015611228573d6000803e3d6000fd5b5050505061125661124b846105e964e8d4a51000856117c890919063ffffffff16565b60038601549061196d565b6003850155505043600290920191909155505b50565b60006007828154811061127b57fe5b600091825260208083208584526008825260408085203380875293529093208054600490930290930180549094506112c0926001600160a01b03919091169190611916565b80546040805191825251849133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a360008082556001909101555050565b61130f6119c7565b6000546001600160a01b0390811691161461135f576040805162461bcd60e51b815260206004820181905260248201526000805160206120af833981519152604482015290519081900360640190fd5b600555565b60075460005b818110156113835761137b81611046565b60010161136a565b5050565b61138f6119c7565b6000546001600160a01b039081169116146113df576040805162461bcd60e51b815260206004820181905260248201526000805160206120af833981519152604482015290519081900360640190fd5b80156113ed576113ed611364565b6000600784815481106113fc57fe5b9060005260206000209060040201600101549050826007858154811061141e57fe5b906000526020600020906004020160010181905550828114610a2b57611459836114538360095461186390919063ffffffff16565b9061196d565b600955610a2b6119cb565b61146c6119c7565b6000546001600160a01b039081169116146114bc576040805162461bcd60e51b815260206004820181905260248201526000805160206120af833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6006546001600160a01b031681565b6002546001600160a01b031681565b60055481565b6003546001600160a01b03163314611575576040805162461bcd60e51b81526020600482015260096024820152686465763a207775743f60b81b604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b6005546000906115ba906108058486611863565b9392505050565b60086020908152600092835260408084209091529082529020805460019091015482565b6003546001600160a01b031681565b6001546001600160a01b031681565b81611655576040805162461bcd60e51b815260206004820152601760248201527f6465706f7369742043414b45206279207374616b696e67000000000000000000604482015290519081900360640190fd5b60006007838154811061166457fe5b6000918252602080832086845260088252604080852033865290925292206004909102909101915061169584611046565b8054156116de5760006116ca82600101546105ef64e8d4a510006105e9876003015487600001546117c890919063ffffffff16565b905080156116dc576116dc33826118a5565b505b821561170a5781546116fb906001600160a01b0316333086611a90565b8054611707908461196d565b81555b600382015481546117259164e8d4a51000916105e9916117c8565b6001820155604080518481529051859133917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a350505050565b61176f6119c7565b6000546001600160a01b039081169116146117bf576040805162461bcd60e51b815260206004820181905260248201526000805160206120af833981519152604482015290519081900360640190fd5b61126981611bfd565b6000826117d75750600061085e565b828202828482816117e457fe5b04146115ba5760405162461bcd60e51b81526004018080602001828103825260218152602001806120586021913960400191505060405180910390fd5b60006115ba83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611c9d565b60006115ba83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611d3f565b600254604080516328b9b77360e21b81526001600160a01b038581166004830152602482018590529151919092169163a2e6ddcc91604480830192600092919082900301818387803b1580156118fa57600080fd5b505af115801561190e573d6000803e3d6000fd5b505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611968908490611d99565b505050565b6000828201838110156115ba576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b600754600060015b82811015611a1657611a0c600782815481106119eb57fe5b9060005260206000209060040201600101548361196d90919063ffffffff16565b91506001016119d3565b50801561138357611a28816003611821565b9050611a62816114536007600081548110611a3f57fe5b90600052602060002090600402016001015460095461186390919063ffffffff16565b600981905550806007600081548110611a7757fe5b9060005260206000209060040201600101819055505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610a2b908590611d99565b801580611b70575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015611b4257600080fd5b505afa158015611b56573d6000803e3d6000fd5b505050506040513d6020811015611b6c57600080fd5b5051155b611bab5760405162461bcd60e51b81526004018080602001828103825260368152602001806120796036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611968908490611d99565b6001600160a01b038116611c425760405162461bcd60e51b81526004018080602001828103825260268152602001806120326026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008183611d295760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cee578181015183820152602001611cd6565b50505050905090810190601f168015611d1b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611d3557fe5b0495945050505050565b60008184841115611d915760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611cee578181015183820152602001611cd6565b505050900390565b6060611dee826040518060400160405280602081526020017f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611e4a9092919063ffffffff16565b80519091501561196857808060200190516020811015611e0d57600080fd5b50516119685760405162461bcd60e51b815260040180806020018281038252602a815260200180612008602a913960400191505060405180910390fd5b6060611e598484600085611e61565b949350505050565b6060611e6c85611fce565b611ebd576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611efc5780518252601f199092019160209182019101611edd565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611f5e576040519150601f19603f3d011682016040523d82523d6000602084013e611f63565b606091505b50915091508115611f77579150611e599050565b805115611f875780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611cee578181015183820152602001611cd6565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611e5957505015159291505056fe5361666542455032303a204245503230206f7065726174696f6e20646964206e6f7420737563636565644f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666542455032303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220a8d56ec0eda32687f63d972156100da356c7c57105671dc70e5ccae310bb8cbe64736f6c634300060c0033";

export class MasterChef__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _cake: string,
    _syrup: string,
    _devaddr: string,
    _cakePerBlock: BigNumberish,
    _startBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterChef> {
    return super.deploy(
      _cake,
      _syrup,
      _devaddr,
      _cakePerBlock,
      _startBlock,
      overrides || {}
    ) as Promise<MasterChef>;
  }
  getDeployTransaction(
    _cake: string,
    _syrup: string,
    _devaddr: string,
    _cakePerBlock: BigNumberish,
    _startBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _cake,
      _syrup,
      _devaddr,
      _cakePerBlock,
      _startBlock,
      overrides || {}
    );
  }
  attach(address: string): MasterChef {
    return super.attach(address) as MasterChef;
  }
  connect(signer: Signer): MasterChef__factory {
    return super.connect(signer) as MasterChef__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterChefInterface {
    return new utils.Interface(_abi) as MasterChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChef {
    return new Contract(address, _abi, signerOrProvider) as MasterChef;
  }
}