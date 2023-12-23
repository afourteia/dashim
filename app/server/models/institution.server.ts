import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Institution as InstitutionType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.InstitutionFindManyArgs) {
  return await enhancedPrisma(userId).institution.findMany(params)
}

async function getOne(userId: string, params: Prisma.InstitutionFindUniqueArgs) {
  return await enhancedPrisma(userId).institution.findUnique(params)
}

async function createMany(userId: string, params: Prisma.InstitutionCreateManyArgs) {
  return await enhancedPrisma(userId).institution.createMany(params)
}

async function createOne(userId: string, params: Prisma.InstitutionCreateArgs) {
  return await enhancedPrisma(userId).institution.create(params)
}

async function updateMany(userId: string, params: Prisma.InstitutionUpdateManyArgs) {
  return await enhancedPrisma(userId).institution.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.InstitutionUpdateArgs) {
  return await enhancedPrisma(userId).institution.update(params)
}

async function deleteMany(userId: string, params: Prisma.InstitutionDeleteManyArgs) {
  return await enhancedPrisma(userId).institution.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.InstitutionDeleteArgs) {
  return await enhancedPrisma(userId).institution.delete(params)
}

export const Institution = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
