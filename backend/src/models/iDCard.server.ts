import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { IDCard as IDCardType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.IDCardFindManyArgs) {
  return await enhancedPrisma(userId).iDCard.findMany(params)
}

async function getOne(userId: string, params: Prisma.IDCardFindUniqueArgs) {
  return await enhancedPrisma(userId).iDCard.findUnique(params)
}

async function createMany(userId: string, params: Prisma.IDCardCreateManyArgs) {
  return await enhancedPrisma(userId).iDCard.createMany(params)
}

async function createOne(userId: string, params: Prisma.IDCardCreateArgs) {
  return await enhancedPrisma(userId).iDCard.create(params)
}

async function updateMany(userId: string, params: Prisma.IDCardUpdateManyArgs) {
  return await enhancedPrisma(userId).iDCard.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.IDCardUpdateArgs) {
  return await enhancedPrisma(userId).iDCard.update(params)
}

async function deleteMany(userId: string, params: Prisma.IDCardDeleteManyArgs) {
  return await enhancedPrisma(userId).iDCard.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.IDCardDeleteArgs) {
  return await enhancedPrisma(userId).iDCard.delete(params)
}

export const IDCard = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
