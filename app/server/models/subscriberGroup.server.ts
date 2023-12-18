import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.SubscriberGroupFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.findMany(params)
}

async function getOne(
  params: Prisma.SubscriberGroupFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.findUnique(params)
}

async function createMany(
  params: Prisma.SubscriberGroupCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.createMany(params)
}

async function createOne(
  params: Prisma.SubscriberGroupCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.create(params)
}

async function updateMany(
  params: Prisma.SubscriberGroupUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.updateMany(params)
}

async function updateOne(
  params: Prisma.SubscriberGroupUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.update(params)
}

async function deleteMany(
  params: Prisma.SubscriberGroupDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.deleteMany(params)
}

async function deleteOne(
  params: Prisma.SubscriberGroupDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriberGroup.delete(params)
}

const SubscriberGroup = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default SubscriberGroup
