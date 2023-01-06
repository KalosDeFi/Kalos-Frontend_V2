import { useCallback } from 'react'
import { harvestFarm } from 'utils/calls'
import { useMasterchefV1 } from 'hooks/useContract'

const useHarvestFarm = (farmPid: number) => {
  const masterChefContract = useMasterchefV1()

  const handleHarvest = useCallback(async () => {
    return harvestFarm(masterChefContract, farmPid)
  }, [farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
