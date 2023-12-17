import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Institution = {
  getMany: middleware(async function getMany(
    params?: Prisma.InstitutionFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.InstitutionFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.InstitutionCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.InstitutionCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.InstitutionUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.InstitutionUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.InstitutionDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.InstitutionDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.institution.delete(params)
  }),
}

export default Institution
