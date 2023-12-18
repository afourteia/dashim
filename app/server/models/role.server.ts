import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.RoleFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.findMany(params)
}

async function getOne(
  params: Prisma.RoleFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.findUnique(params)
}

async function createMany(
  params: Prisma.RoleCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.createMany(params)
}

async function createOne(
  params: Prisma.RoleCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.create(params)
}

async function updateMany(
  params: Prisma.RoleUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.updateMany(params)
}

async function updateOne(
  params: Prisma.RoleUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.update(params)
}

async function deleteMany(
  params: Prisma.RoleDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.deleteMany(params)
}

async function deleteOne(
  params: Prisma.RoleDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.role.delete(params)
}

const Role = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Role
