export const useStore = async () => {
  const regionsData = await $fetch('/api/regions/') || []
  const typologiesData = await $fetch('/api/typologies/') || []
  const isListView = useState<boolean>('isListView', () => true)
  const regions = useState<any[]>('regions', () => regionsData)
  const typologies = useState<any[]>('typologies', () => typologiesData)
  return {
    getIsListView: () => isListView.value,
    setIsListView: (data: boolean) => isListView.value = data,
    getRegions: () => regions.value,
    setRegions: (data: any[]) => regions.value = data,
    getTypologies: () => typologies.value,
    setTypologies: (data: any[]) => typologies.value = data,
  }
}
