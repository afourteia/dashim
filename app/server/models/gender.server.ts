import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const Gender = {
  getMany: middleware(async function getMany(params?: Prisma.GenderFindManyArgs) {
    return await prisma.gender.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.GenderFindUniqueArgs) {
    return await prisma.gender.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.GenderCreateManyArgs
  ) {
    return await prisma.gender.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.GenderCreateArgs
  ) {
    return await prisma.gender.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.GenderUpdateManyArgs
  ) {
    return await prisma.gender.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.GenderUpdateArgs
  ) {
    return await prisma.gender.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.GenderDeleteManyArgs
  ) {
    return await prisma.gender.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.GenderDeleteArgs
  ) {
    return await prisma.gender.delete(params)
  }),
}

export default Gender
