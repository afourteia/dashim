import { enhancedPrisma } from '@config/db'
import type { Prisma } from '@prisma/client'
import { middleware } from '@utilities/middleware'

export type { DeviceToken as DeviceTokenType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.DeviceTokenFindManyArgs) {
  return await enhancedPrisma(userId).deviceToken.findMany(params)
}

async function getOne(userId: string, params: Prisma.DeviceTokenFindUniqueArgs) {
  return await enhancedPrisma(userId).deviceToken.findUnique(params)
}

async function createMany(userId: string, params: Prisma.DeviceTokenCreateManyArgs) {
  return await enhancedPrisma(userId).deviceToken.createMany(params)
}

async function createOne(userId: string, params: Prisma.DeviceTokenCreateArgs) {
  return await enhancedPrisma(userId).deviceToken.create(params)
}

async function updateMany(userId: string, params: Prisma.DeviceTokenUpdateManyArgs) {
  return await enhancedPrisma(userId).deviceToken.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.DeviceTokenUpdateArgs) {
  return await enhancedPrisma(userId).deviceToken.update(params)
}

async function deleteMany(userId: string, params: Prisma.DeviceTokenDeleteManyArgs) {
  return await enhancedPrisma(userId).deviceToken.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.DeviceTokenDeleteArgs) {
  return await enhancedPrisma(userId).deviceToken.delete(params)
}

export const DeviceToken = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
