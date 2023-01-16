import { useEffect } from 'react'
import { useXaloBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const xaloPriceBusd = useXaloBusdPrice()
  useEffect(() => {
    const xaloPriceBusdString = xaloPriceBusd ? xaloPriceBusd.toFixed(2) : ''
    document.title = `Pancake Swap - ${xaloPriceBusdString}`
  }, [xaloPriceBusd])
}
export default useGetDocumentTitlePrice
