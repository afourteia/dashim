import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Institution = {
  getMany: middleware(async function getMany(params?: Prisma.InstitutionFindManyArgs) {
    return await prisma.institution.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.InstitutionFindUniqueArgs) {
    return await prisma.institution.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.InstitutionCreateManyArgs
  ) {
    return await prisma.institution.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.InstitutionCreateArgs
  ) {
    return await prisma.institution.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.InstitutionUpdateManyArgs
  ) {
    return await prisma.institution.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.InstitutionUpdateArgs
  ) {
    return await prisma.institution.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.InstitutionDeleteManyArgs
  ) {
    return await prisma.institution.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.InstitutionDeleteArgs
  ) {
    return await prisma.institution.delete(params)
  }),
}

export default Institution
