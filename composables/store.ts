import RegionType from "~/types/prismaTypes/regionType"
import TypologyType from "~/types/prismaTypes/typologyType"

export const useStore = async () => {
  const regionsData = await $fetch('/api/regions/') || []
  const typologiesData = await $fetch('/api/typologies/') || []
  const isListView = useState<boolean>('isListView', () => true)
  const regions = useState<RegionType[]>('regions', () => regionsData)
  const typologies = useState<TypologyType[]>('typologies', () => typologiesData)
  return {
    getIsListView: () => isListView.value,
    setIsListView: (data: boolean) => isListView.value = data,
    getRegions: (): RegionType[] => regions.value,
    getTypologies: (): TypologyType[] => typologies.value
  }
}
