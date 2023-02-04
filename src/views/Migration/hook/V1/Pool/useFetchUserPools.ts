import { useCallback, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { SerializedPool } from 'state/types'
import { transformPool } from 'state/pools/helpers'
import { getXaloContract } from 'utils/contractHelpers'
import { PoolCategory } from 'config/constants/types'
import { serializeTokens } from 'config/constants/tokens'
import { fetchUserStakeBalances, fetchUserPendingRewards } from './fetchPoolsUser'

import KALOS_CONTRACT_LIST from '../../../../../config/constants/kalos-default.contracts.json';
import { ChainId } from '@pancakeswap/sdk'
import { CHAIN_ID } from 'config/constants/networks'

const mainnetKalosRouter = KALOS_CONTRACT_LIST.filter((contract) => contract['name'] === 'MasterChef' && contract.chainId == ChainId.MAINNET)[0]
const testnetKalosRouter = KALOS_CONTRACT_LIST.filter((contract) => contract['name'] === 'MasterChef' && contract.chainId == ChainId.TESTNET)[0]

export interface PoolsState {
  data: SerializedPool
  userDataLoaded: boolean
}

const serializedTokens = serializeTokens()
const xaloContract = getXaloContract()

const initialData = {
  data: {
    sousId: 0,
    stakingToken: serializedTokens.xalo,
    earningToken: serializedTokens.xalo,
    contractAddress: {
      97: testnetKalosRouter.address,
      56: mainnetKalosRouter.address,
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
    totalStaked: '0',
  },
  userDataLoaded: false,
}

export const useFetchUserPools = (account) => {
  const [userPoolsData, setPoolsUserData] = useState<PoolsState>(initialData)

  const fetchUserPoolsData = useCallback(() => {
    if (account) {
      const fetchPoolsUserDataAsync = async () => {
        try {
          const [stakedBalances, pendingRewards, totalStaking] = await Promise.all([
            fetchUserStakeBalances(account),
            fetchUserPendingRewards(account),
            xaloContract.balanceOf(initialData.data.contractAddress[CHAIN_ID]),
          ])

          const userData = {
            sousId: initialData.data.sousId,
            allowance: '0',
            stakingTokenBalance: '0',
            stakedBalance: stakedBalances,
            pendingReward: pendingRewards,
          }

          setPoolsUserData((old) => ({
            data: {
              ...old.data,
              userData,
              totalStaked: new BigNumber(totalStaking.toString()).toJSON(),
            },
            userDataLoaded: true,
          }))
        } catch (error) {
          console.error('[Pools Action] Error fetching pool user data', error)
        }
      }

      fetchPoolsUserDataAsync()
    }
  }, [account])

  useFastRefreshEffect(() => {
    fetchUserPoolsData()
  }, [fetchUserPoolsData])

  return {
    data: transformPool(userPoolsData.data),
    userDataLoaded: userPoolsData.userDataLoaded,
    fetchUserPoolsData,
  }
}
