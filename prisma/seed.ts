import facilities from "./data/facilities";
import types from "./data/types";
import regions from "./data/regions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

function getFacilityWebsite (website = '') {
  if(website !== '') {
    return website.substring(0, 4) === 'http' ? website : 'http://' + website
  } else return ''
}
async function upload() {
  for (let facility of facilities) {
    await prisma.facility.create({
      data: {
        code: facility.code,
        name: facility.name,
        level: facility.level,
        website: getFacilityWebsite(facility.website),
        typology: facility["entity-tipology"],
        typologySlug: facility["entity-tipology"].toLowerCase().trim().replace(/\s+/g, '-').replace(',',''),
        venue: facility["entity-venue"],
        city: facility.place.comune,
        street: facility.place.address,
        province: facility.place.provincia,
        region: facility.place.regione,
        regionSlug: facility.place.regione.toLowerCase().trim().replace(/\s+/g, '-'),
        zipCode: facility.place["zip-code"],
        parentCode: facility.parent["parent-code"],
        parentLevel: facility.parent["parent-level"],
        parentRelationName: facility.parent["parent-relation-name"]
      }
    })
  }

  for (let type of types) {
    await prisma.type.create({
      data: {
        name: type.name,
        slug: type.name.toLowerCase()
                       .trim()
                       .replace(/\s+/g, '-')
                       .replace(',','')
      }
    })
  }

  for (let region of regions) {
    await prisma.region.create({
      data: {
        name: region.name,
        slug: region.name.toLowerCase()
                         .trim()
                         .replace(/\s+/g, '-')
                         .replace(/\x27+/g, '-')
      }
    })
  }
}

upload().catch(e => {
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
})