import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const User = {
  getMany: async function getMany(params?: Prisma.UserFindManyArgs) {
    return await prisma.user.findMany(params)
  },

  getOne: middleware(async function getOne(
    params: Prisma.UserFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.UserCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.createMany(params)
  }),

  createOne: async function createOne(
    params: Prisma.UserCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.create(params)
  },

  updateMany: middleware(async function updateMany(
    params: Prisma.UserUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.UserUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.UserDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.UserDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.user.delete(params)
  }),
}

export default User
