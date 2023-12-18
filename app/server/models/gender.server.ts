import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.GenderFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.findMany(params)
}

async function getOne(
  params: Prisma.GenderFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.findUnique(params)
}

async function createMany(
  params: Prisma.GenderCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.createMany(params)
}

async function createOne(
  params: Prisma.GenderCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.create(params)
}

async function updateMany(
  params: Prisma.GenderUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.updateMany(params)
}

async function updateOne(
  params: Prisma.GenderUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.update(params)
}

async function deleteMany(
  params: Prisma.GenderDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.deleteMany(params)
}

async function deleteOne(
  params: Prisma.GenderDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.gender.delete(params)
}

const Gender = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Gender
