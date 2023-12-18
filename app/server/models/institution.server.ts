import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.InstitutionFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.findMany(params)
}

async function getOne(
  params: Prisma.InstitutionFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.findUnique(params)
}

async function createMany(
  params: Prisma.InstitutionCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.createMany(params)
}

async function createOne(
  params: Prisma.InstitutionCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.create(params)
}

async function updateMany(
  params: Prisma.InstitutionUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.updateMany(params)
}

async function updateOne(
  params: Prisma.InstitutionUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.update(params)
}

async function deleteMany(
  params: Prisma.InstitutionDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.deleteMany(params)
}

async function deleteOne(
  params: Prisma.InstitutionDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.institution.delete(params)
}

const Institution = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Institution
