import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { FingerType as FingerTypeType } from '@prisma/client'

async function getMany(params?: Prisma.FingerTypeFindManyArgs) {
  return await prisma.fingerType.findMany(params)
}

async function getOne(params: Prisma.FingerTypeFindUniqueArgs) {
  return await prisma.fingerType.findUnique(params)
}

async function createMany(params: Prisma.FingerTypeCreateManyArgs) {
  return await prisma.fingerType.createMany(params)
}

async function createOne(params: Prisma.FingerTypeCreateArgs) {
  return await prisma.fingerType.create(params)
}

async function updateMany(params: Prisma.FingerTypeUpdateManyArgs) {
  return await prisma.fingerType.updateMany(params)
}

async function updateOne(params: Prisma.FingerTypeUpdateArgs) {
  return await prisma.fingerType.update(params)
}

async function deleteMany(params: Prisma.FingerTypeDeleteManyArgs) {
  return await prisma.fingerType.deleteMany(params)
}

async function deleteOne(params: Prisma.FingerTypeDeleteArgs) {
  return await prisma.fingerType.delete(params)
}

export const FingerType = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
