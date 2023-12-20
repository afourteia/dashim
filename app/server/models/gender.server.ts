import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Gender as GenderType } from '@prisma/client'

async function getMany(params?: Prisma.GenderFindManyArgs) {
  return await prisma.gender.findMany(params)
}

async function getOne(params: Prisma.GenderFindUniqueArgs) {
  return await prisma.gender.findUnique(params)
}

async function createMany(params: Prisma.GenderCreateManyArgs) {
  return await prisma.gender.createMany(params)
}

async function createOne(params: Prisma.GenderCreateArgs) {
  return await prisma.gender.create(params)
}

async function updateMany(params: Prisma.GenderUpdateManyArgs) {
  return await prisma.gender.updateMany(params)
}

async function updateOne(params: Prisma.GenderUpdateArgs) {
  return await prisma.gender.update(params)
}

async function deleteMany(params: Prisma.GenderDeleteManyArgs) {
  return await prisma.gender.deleteMany(params)
}

async function deleteOne(params: Prisma.GenderDeleteArgs) {
  return await prisma.gender.delete(params)
}

export const Gender = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
