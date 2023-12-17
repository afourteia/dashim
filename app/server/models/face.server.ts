import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Face = {
  getMany: middleware(async function getMany(
    params?: Prisma.FaceFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.FaceFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.FaceCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.FaceCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.FaceUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.FaceUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.FaceDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.FaceDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.face.delete(params)
  }),
}

export default Face
