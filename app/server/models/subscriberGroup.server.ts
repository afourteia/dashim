import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const SubscriberGroup = {
  getMany: middleware(async function getMany(
    params?: Prisma.SubscriberGroupFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.SubscriberGroupFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.SubscriberGroupCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.SubscriberGroupCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.SubscriberGroupUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.SubscriberGroupUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.SubscriberGroupDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.SubscriberGroupDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.subscriberGroup.delete(params)
  }),
}

export default SubscriberGroup
