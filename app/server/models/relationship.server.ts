import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Relationship = {
  getMany: middleware(async function getMany(
    params?: Prisma.RelationshipFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.RelationshipFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.RelationshipCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.RelationshipCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.RelationshipUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.RelationshipUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.RelationshipDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.RelationshipDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.relationship.delete(params)
  }),
}

export default Relationship
