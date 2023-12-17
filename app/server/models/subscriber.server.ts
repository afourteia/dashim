import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Subscriber = {
  getMany: middleware(async function getMany(params?: Prisma.SubscriberFindManyArgs) {
    return await prisma.subscriber.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.SubscriberFindUniqueArgs) {
    return await prisma.subscriber.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.SubscriberCreateManyArgs
  ) {
    return await prisma.subscriber.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.SubscriberCreateArgs
  ) {
    return await prisma.subscriber.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.SubscriberUpdateManyArgs
  ) {
    return await prisma.subscriber.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.SubscriberUpdateArgs
  ) {
    return await prisma.subscriber.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.SubscriberDeleteManyArgs
  ) {
    return await prisma.subscriber.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.SubscriberDeleteArgs
  ) {
    return await prisma.subscriber.delete(params)
  }),
}

export default Subscriber
