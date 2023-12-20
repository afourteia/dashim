import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { Institution as InstitutionType } from '@prisma/client'

async function getMany(params?: Prisma.InstitutionFindManyArgs) {
  return await prisma.institution.findMany(params)
}

async function getOne(params: Prisma.InstitutionFindUniqueArgs) {
  return await prisma.institution.findUnique(params)
}

async function createMany(params: Prisma.InstitutionCreateManyArgs) {
  return await prisma.institution.createMany(params)
}

async function createOne(params: Prisma.InstitutionCreateArgs) {
  return await prisma.institution.create(params)
}

async function updateMany(params: Prisma.InstitutionUpdateManyArgs) {
  return await prisma.institution.updateMany(params)
}

async function updateOne(params: Prisma.InstitutionUpdateArgs) {
  return await prisma.institution.update(params)
}

async function deleteMany(params: Prisma.InstitutionDeleteManyArgs) {
  return await prisma.institution.deleteMany(params)
}

async function deleteOne(params: Prisma.InstitutionDeleteArgs) {
  return await prisma.institution.delete(params)
}

export const Institution = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
