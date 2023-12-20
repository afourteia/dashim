import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { IDCard as IDCardType } from '@prisma/client'

async function getMany(params?: Prisma.IDCardFindManyArgs) {
  return await prisma.iDCard.findMany(params)
}

async function getOne(params: Prisma.IDCardFindUniqueArgs) {
  return await prisma.iDCard.findUnique(params)
}

async function createMany(params: Prisma.IDCardCreateManyArgs) {
  return await prisma.iDCard.createMany(params)
}

async function createOne(params: Prisma.IDCardCreateArgs) {
  return await prisma.iDCard.create(params)
}

async function updateMany(params: Prisma.IDCardUpdateManyArgs) {
  return await prisma.iDCard.updateMany(params)
}

async function updateOne(params: Prisma.IDCardUpdateArgs) {
  return await prisma.iDCard.update(params)
}

async function deleteMany(params: Prisma.IDCardDeleteManyArgs) {
  return await prisma.iDCard.deleteMany(params)
}

async function deleteOne(params: Prisma.IDCardDeleteArgs) {
  return await prisma.iDCard.delete(params)
}

export const IDCard = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
