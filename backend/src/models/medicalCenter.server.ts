import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { MedicalCenter as MedicalCenterType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.MedicalCenterFindManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.findMany(params)
}

async function getOne(userId: string, params: Prisma.MedicalCenterFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalCenter.findUnique(params)
}

async function createMany(userId: string, params: Prisma.MedicalCenterCreateManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.createMany(params)
}

async function createOne(userId: string, params: Prisma.MedicalCenterCreateArgs) {
  return await enhancedPrisma(userId).medicalCenter.create(params)
}

async function updateMany(userId: string, params: Prisma.MedicalCenterUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.MedicalCenterUpdateArgs) {
  return await enhancedPrisma(userId).medicalCenter.update(params)
}

async function deleteMany(userId: string, params: Prisma.MedicalCenterDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalCenter.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.MedicalCenterDeleteArgs) {
  return await enhancedPrisma(userId).medicalCenter.delete(params)
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
