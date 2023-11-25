export interface FacilityType {
    id: number
    code: number
    level: number
    name: string
    typology: string
    typologySlug: string
    venue: string
    website: string | null
    city: string | null
    province: string | null
    region: string
    regionSlug: string
    zipCode: string
    street: string | null
    parentCode: number | undefined
    parentLevel: number | null
    parentRelationName: string | null
    parent?: FacilityType
    children?: FacilityType[]
}

export default FacilityType