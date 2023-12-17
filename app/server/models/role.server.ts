import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Role = {
  getMany: middleware(async function getMany(params?: Prisma.RoleFindManyArgs) {
    return await prisma.role.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.RoleFindUniqueArgs) {
    return await prisma.role.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.RoleCreateManyArgs
  ) {
    return await prisma.role.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.RoleCreateArgs
  ) {
    return await prisma.role.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.RoleUpdateManyArgs
  ) {
    return await prisma.role.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.RoleUpdateArgs
  ) {
    return await prisma.role.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.RoleDeleteManyArgs
  ) {
    return await prisma.role.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.RoleDeleteArgs
  ) {
    return await prisma.role.delete(params)
  }),
}

export default Role
