import RegionType from "~/types/prismaTypes/regionType"
import TypologyType from "~/types/prismaTypes/typologyType"

export const useStore = () => {
  const isListView = ref<boolean>(true)
  const regions = ref<RegionType[]>([])
  const typologies = ref<TypologyType[]>([])
  $fetch<RegionType[]>('/api/regions/')
  .then((result) => regions.value = result)
  $fetch<TypologyType[]>('/api/typologies/')
  .then((result) => typologies.value = result)
  return {
    getIsListView: isListView,
    setIsListView: (data: boolean) => isListView.value = data,
    getRegions: regions,
    getTypologies: typologies
  }
}
