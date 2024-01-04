import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { FingerType as FingerTypeType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.FingerTypeFindManyArgs) {
  return await enhancedPrisma(userId).fingerType.findMany(params)
}

async function getOne(userId: string, params: Prisma.FingerTypeFindUniqueArgs) {
  return await enhancedPrisma(userId).fingerType.findUnique(params)
}

async function createMany(userId: string, params: Prisma.FingerTypeCreateManyArgs) {
  return await enhancedPrisma(userId).fingerType.createMany(params)
}

async function createOne(userId: string, params: Prisma.FingerTypeCreateArgs) {
  return await enhancedPrisma(userId).fingerType.create(params)
}

async function updateMany(userId: string, params: Prisma.FingerTypeUpdateManyArgs) {
  return await enhancedPrisma(userId).fingerType.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.FingerTypeUpdateArgs) {
  return await enhancedPrisma(userId).fingerType.update(params)
}

async function deleteMany(userId: string, params: Prisma.FingerTypeDeleteManyArgs) {
  return await enhancedPrisma(userId).fingerType.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.FingerTypeDeleteArgs) {
  return await enhancedPrisma(userId).fingerType.delete(params)
}

export const FingerType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
