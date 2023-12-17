import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Role = {
  getMany: middleware(async function getMany(
    params?: Prisma.RoleFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.RoleFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.RoleCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.RoleCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.RoleUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.RoleUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.RoleDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.RoleDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.role.delete(params)
  }),
}

export default Role
