import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.FaceFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.findMany(params)
}

async function getOne(
  params: Prisma.FaceFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.findUnique(params)
}

async function createMany(
  params: Prisma.FaceCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.createMany(params)
}

async function createOne(
  params: Prisma.FaceCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.create(params)
}

async function updateMany(
  params: Prisma.FaceUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.updateMany(params)
}

async function updateOne(
  params: Prisma.FaceUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.update(params)
}

async function deleteMany(
  params: Prisma.FaceDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.deleteMany(params)
}

async function deleteOne(
  params: Prisma.FaceDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.face.delete(params)
}

const Face = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default Face
