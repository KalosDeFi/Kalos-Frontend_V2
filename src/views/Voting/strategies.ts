const votePowerAddress = {
  v0: '0xc0FeBE244cE1ea66d27D23012B3D616432433F42',
  v1: '0x67Dfbb197602FDB9A9D305cC7A43b95fB63a0A56',
}

export const xaloBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getXaloBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export const xaloVaultBalanceStrategy = {
  name: 'contract-call',
  params: {
    address: votePowerAddress.v0,
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getXaloVaultBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

export const ifoPoolBalanceStrategy = {
  name: 'contract-call',
  params: {
    address: votePowerAddress.v0,
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getIFOPoolBalancee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

export const xaloPoolBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getCakePoolBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export const cakeBnbLpBalanceStrategy = (version: 'v0' | 'v1') => ({
  name: 'contract-call',
  params: {
    address: votePowerAddress[version],
    decimals: 18,
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '_user',
          type: 'address',
        },
      ],
      name: 'getCakeBnbLpBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
})

export function creatPoolsBalanceStrategy(poolAddress, version: 'v0' | 'v1') {
  return {
    name: 'contract-call',
    params: {
      address: votePowerAddress[version],
      decimals: 18,
      args: ['%{address}', poolAddress],
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: '_pools',
            type: 'address[]',
          },
        ],
        name: 'getPoolsBalance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    },
  }
}

export function createTotalStrategy(poolAddress, version: 'v0' | 'v1') {
  return {
    name: 'contract-call',
    params: {
      address: votePowerAddress[version],
      decimals: 18,
      args: ['%{address}', poolAddress],
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: '_pools',
            type: 'address[]',
          },
        ],
        name: 'getVotingPower',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    },
  }
}
