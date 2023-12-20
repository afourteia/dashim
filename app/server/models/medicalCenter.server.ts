import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { MedicalCenter as MedicalCenterType } from '@prisma/client'

async function getMany(params?: Prisma.MedicalCenterFindManyArgs) {
  return await prisma.medicalCenter.findMany(params)
}

async function getOne(params: Prisma.MedicalCenterFindUniqueArgs) {
  return await prisma.medicalCenter.findUnique(params)
}

async function createMany(params: Prisma.MedicalCenterCreateManyArgs) {
  return await prisma.medicalCenter.createMany(params)
}

async function createOne(params: Prisma.MedicalCenterCreateArgs) {
  return await prisma.medicalCenter.create(params)
}

async function updateMany(params: Prisma.MedicalCenterUpdateManyArgs) {
  return await prisma.medicalCenter.updateMany(params)
}

async function updateOne(params: Prisma.MedicalCenterUpdateArgs) {
  return await prisma.medicalCenter.update(params)
}

async function deleteMany(params: Prisma.MedicalCenterDeleteManyArgs) {
  return await prisma.medicalCenter.deleteMany(params)
}

async function deleteOne(params: Prisma.MedicalCenterDeleteArgs) {
  return await prisma.medicalCenter.delete(params)
}

export const MedicalCenter = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
