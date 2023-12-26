import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { SubscriberGroup as SubscriberGroupType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.SubscriberGroupFindManyArgs) {
  return await enhancedPrisma(userId).subscriberGroup.findMany(params)
}

async function getOne(userId: string, params: Prisma.SubscriberGroupFindUniqueArgs) {
  return await enhancedPrisma(userId).subscriberGroup.findUnique(params)
}

async function createMany(userId: string, params: Prisma.SubscriberGroupCreateManyArgs) {
  return await enhancedPrisma(userId).subscriberGroup.createMany(params)
}

async function createOne(userId: string, params: Prisma.SubscriberGroupCreateArgs) {
  return await enhancedPrisma(userId).subscriberGroup.create(params)
}

async function updateMany(userId: string, params: Prisma.SubscriberGroupUpdateManyArgs) {
  return await enhancedPrisma(userId).subscriberGroup.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.SubscriberGroupUpdateArgs) {
  return await enhancedPrisma(userId).subscriberGroup.update(params)
}

async function deleteMany(userId: string, params: Prisma.SubscriberGroupDeleteManyArgs) {
  return await enhancedPrisma(userId).subscriberGroup.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.SubscriberGroupDeleteArgs) {
  return await enhancedPrisma(userId).subscriberGroup.delete(params)
}

export const SubscriberGroup = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
