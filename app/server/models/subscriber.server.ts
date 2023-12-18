import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.SubscriberFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.findMany(params)
}

async function getOne(
  params: Prisma.SubscriberFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.findUnique(params)
}

async function createMany(
  params: Prisma.SubscriberCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.createMany(params)
}

async function createOne(
  params: Prisma.SubscriberCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.create(params)
}

async function updateMany(
  params: Prisma.SubscriberUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.updateMany(params)
}

async function updateOne(
  params: Prisma.SubscriberUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.update(params)
}

async function deleteMany(
  params: Prisma.SubscriberDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.deleteMany(params)
}

async function deleteOne(
  params: Prisma.SubscriberDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.subscriber.delete(params)
}

const Subscriber = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Subscriber
