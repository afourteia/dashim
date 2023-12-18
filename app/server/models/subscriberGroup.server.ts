import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(params?: Prisma.SubscriberGroupFindManyArgs) {
  return await prisma.subscriberGroup.findMany(params)
}

async function getOne(params: Prisma.SubscriberGroupFindUniqueArgs) {
  return await prisma.subscriberGroup.findUnique(params)
}

async function createMany(params: Prisma.SubscriberGroupCreateManyArgs) {
  return await prisma.subscriberGroup.createMany(params)
}

async function createOne(params: Prisma.SubscriberGroupCreateArgs) {
  return await prisma.subscriberGroup.create(params)
}

async function updateMany(params: Prisma.SubscriberGroupUpdateManyArgs) {
  return await prisma.subscriberGroup.updateMany(params)
}

async function updateOne(params: Prisma.SubscriberGroupUpdateArgs) {
  return await prisma.subscriberGroup.update(params)
}

async function deleteMany(params: Prisma.SubscriberGroupDeleteManyArgs) {
  return await prisma.subscriberGroup.deleteMany(params)
}

async function deleteOne(params: Prisma.SubscriberGroupDeleteArgs) {
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
