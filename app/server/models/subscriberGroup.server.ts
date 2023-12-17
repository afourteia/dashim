import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const SubscriberGroup = {
  getMany: middleware(async function getMany(params?: Prisma.SubscriberGroupFindManyArgs) {
    return await prisma.subscriberGroup.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.SubscriberGroupFindUniqueArgs) {
    return await prisma.subscriberGroup.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.SubscriberGroupCreateManyArgs
  ) {
    return await prisma.subscriberGroup.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.SubscriberGroupCreateArgs
  ) {
    return await prisma.subscriberGroup.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.SubscriberGroupUpdateManyArgs
  ) {
    return await prisma.subscriberGroup.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.SubscriberGroupUpdateArgs
  ) {
    return await prisma.subscriberGroup.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.SubscriberGroupDeleteManyArgs
  ) {
    return await prisma.subscriberGroup.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.SubscriberGroupDeleteArgs
  ) {
    return await prisma.subscriberGroup.delete(params)
  }),
}

export default SubscriberGroup
