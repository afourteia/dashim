import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Subscriber as SubscriberType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.SubscriberFindManyArgs) {
  return await enhancedPrisma(userId).subscriber.findMany(params)
}

async function getOne(userId: string, params: Prisma.SubscriberFindUniqueArgs) {
  return await enhancedPrisma(userId).subscriber.findUnique(params)
}

async function createMany(userId: string, params: Prisma.SubscriberCreateManyArgs) {
  return await enhancedPrisma(userId).subscriber.createMany(params)
}

async function createOne(userId: string, params: Prisma.SubscriberCreateArgs) {
  return await enhancedPrisma(userId).subscriber.create(params)
}

async function updateMany(userId: string, params: Prisma.SubscriberUpdateManyArgs) {
  return await enhancedPrisma(userId).subscriber.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.SubscriberUpdateArgs) {
  return await enhancedPrisma(userId).subscriber.update(params)
}

async function deleteMany(userId: string, params: Prisma.SubscriberDeleteManyArgs) {
  return await enhancedPrisma(userId).subscriber.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.SubscriberDeleteArgs) {
  return await enhancedPrisma(userId).subscriber.delete(params)
}

export const Subscriber = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
