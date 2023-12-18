import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.RelationshipFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.findMany(params)
}

async function getOne(
  params: Prisma.RelationshipFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.findUnique(params)
}

async function createMany(
  params: Prisma.RelationshipCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.createMany(params)
}

async function createOne(
  params: Prisma.RelationshipCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.create(params)
}

async function updateMany(
  params: Prisma.RelationshipUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.updateMany(params)
}

async function updateOne(
  params: Prisma.RelationshipUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.update(params)
}

async function deleteMany(
  params: Prisma.RelationshipDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.deleteMany(params)
}

async function deleteOne(
  params: Prisma.RelationshipDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.relationship.delete(params)
}

const Relationship = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Relationship
