import { useEffect } from 'react'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const xaloPriceBusd = useCakeBusdPrice()
  useEffect(() => {
    const xaloPriceBusdString = xaloPriceBusd ? xaloPriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${xaloPriceBusdString}`
  }, [xaloPriceBusd])
}
export default useGetDocumentTitlePrice
