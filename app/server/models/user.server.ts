import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.UserFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.findMany(params)
}

async function getOne(
  params: Prisma.UserFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.findUnique(params)
}

async function createMany(
  params: Prisma.UserCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.createMany(params)
}

async function createOne(
  params: Prisma.UserCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.create(params)
}

async function updateMany(
  params: Prisma.UserUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.updateMany(params)
}

async function updateOne(
  params: Prisma.UserUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.update(params)
}

async function deleteMany(
  params: Prisma.UserDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.deleteMany(params)
}

async function deleteOne(
  params: Prisma.UserDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.user.delete(params)
}

const User = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default User
