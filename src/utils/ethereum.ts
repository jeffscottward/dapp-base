import { ethers } from "ethers"

type Address = string;
type EthereumProvider = string | ethers.providers.ExternalProvider;

export const createEthereumProvider = (provider: EthereumProvider): ethers.providers.JsonRpcProvider => {
  if (typeof provider === "string") {
    return new ethers.providers.JsonRpcProvider(provider);
  } else {
    return new ethers.providers.Web3Provider(provider);
  }
}

export const getContract = (address: Address, abi: string[], provider: ethers.providers.JsonRpcProvider): ethers.Contract => {
  return new ethers.Contract(address, abi, provider.getSigner());
}

export const deployContract = async (
  abi: ethers.ContractInterface,
  bytecode: string,
  provider: ethers.providers.JsonRpcProvider,
  ...args: unknown[]
): Promise<Address> => {
  const factory = new ethers.ContractFactory(abi, bytecode, provider.getSigner());
  const contract = await factory.deploy(...args);
  await contract.deployTransaction.wait();
  return contract.address;
}

export const callView = async (
  address: Address,
  method: string,
  args: string[],
  provider: ethers.providers.JsonRpcProvider
): Promise<string> => {
  const contract = getContract(address, [method], provider);
  const funcs = Object.keys(contract.interface.functions);
  const res = await contract[funcs[0]](...args);
  return res.toString();
}

export const sendTransaction = async (
  address: Address,
  method: string,
  args: (string | Record<string, string | number> )[],
  provider: ethers.providers.JsonRpcProvider
): Promise<ethers.providers.TransactionReceipt> => {
  const contract = getContract(address, [method], provider);
  const funcs = Object.keys(contract.interface.functions);
  try {
    const tx = await contract[funcs[0]](...args);
    return await tx.wait();
  } catch (e) {
    console.log(e);
    throw e;
  }
}