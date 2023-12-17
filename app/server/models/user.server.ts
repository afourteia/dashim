import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const User = {
  getMany: middleware(async function getMany(
    params?: Prisma.UserFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    console.log('getMany')
    return await prisma.user.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.UserFindUniqueArgs) {
    return await prisma.user.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.UserCreateManyArgs
  ) {
    return await prisma.user.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.UserCreateArgs
  ) {
    return await prisma.user.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.UserUpdateManyArgs
  ) {
    return await prisma.user.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.UserUpdateArgs
  ) {
    return await prisma.user.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.UserDeleteManyArgs
  ) {
    return await prisma.user.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.UserDeleteArgs
  ) {
    return await prisma.user.delete(params)
  }),
}

export default User
