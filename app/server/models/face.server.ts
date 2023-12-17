import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Face = {
  getMany: middleware(async function getMany(params?: Prisma.FaceFindManyArgs) {
    return await prisma.face.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.FaceFindUniqueArgs) {
    return await prisma.face.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.FaceCreateManyArgs
  ) {
    return await prisma.face.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.FaceCreateArgs
  ) {
    return await prisma.face.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.FaceUpdateManyArgs
  ) {
    return await prisma.face.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.FaceUpdateArgs
  ) {
    return await prisma.face.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.FaceDeleteManyArgs
  ) {
    return await prisma.face.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.FaceDeleteArgs
  ) {
    return await prisma.face.delete(params)
  }),
}

export default Face
