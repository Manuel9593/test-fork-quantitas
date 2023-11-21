import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

type FacilityType = {
  id: number,
  code: string | number
  value: string,
  hasChildren: boolean,
  children: FacilityType[]
}

type ResponseType = {
  id: number,
  value: string,
  hasChildren: boolean,
  children: FacilityType[]
}

export default defineEventHandler(() => {
  return prisma.facility.findMany({
    orderBy: { name: 'asc' },
    where: { level: 1 }
  }).then((data) => {
    return data;
  })
  // const response: ResponseType = {
  //   value: 'Ministero Beni Culturali',
  //   id: 0,
  //   hasChildren: true,
  //   children: []
  // }
  // for (const facility of facilities) {
  //   response.children.push({ code: facility.code, value: facility.name, id: facility.id, hasChildren: true, children: [] })
  // }
  // const allFacilities = prisma.facility.findMany({})
  // // level 2
  // for (const facility of response.children) {
  //   allFacilities.forEach((element) => {
  //     if (element.parentCode === facility.code) {
  //       facility.children.push({ code: element.code, value: element.name, id: element.id })
  //       // level 3
  //       // for (const facilityChild of facility.children) {
  //       //   allFacilities.forEach((element) => {
  //       //     facilityChild.children.push({ code: element.code, value: element.name, id: element.id, hasChildren: false })
  //       //   })
  //       // }
  //     }
  //   })
  // }
})
