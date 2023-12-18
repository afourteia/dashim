import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(params?: Prisma.SubscriberFindManyArgs) {
  return await prisma.subscriber.findMany(params)
}

async function getOne(params: Prisma.SubscriberFindUniqueArgs) {
  return await prisma.subscriber.findUnique(params)
}

async function createMany(params: Prisma.SubscriberCreateManyArgs) {
  return await prisma.subscriber.createMany(params)
}

async function createOne(params: Prisma.SubscriberCreateArgs) {
  return await prisma.subscriber.create(params)
}

async function updateMany(params: Prisma.SubscriberUpdateManyArgs) {
  return await prisma.subscriber.updateMany(params)
}

async function updateOne(params: Prisma.SubscriberUpdateArgs) {
  return await prisma.subscriber.update(params)
}

async function deleteMany(params: Prisma.SubscriberDeleteManyArgs) {
  return await prisma.subscriber.deleteMany(params)
}

async function deleteOne(params: Prisma.SubscriberDeleteArgs) {
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
