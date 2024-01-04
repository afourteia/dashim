import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { MedicalCenterService as MedicalCenterServiceType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.MedicalCenterServiceFindManyArgs) {
  return await enhancedPrisma(userId).medicalCenterService.findMany(params)
}

async function getOne(userId: string, params: Prisma.MedicalCenterServiceFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalCenterService.findUnique(params)
}

async function createMany(userId: string, params: Prisma.MedicalCenterServiceCreateManyArgs) {
  return await enhancedPrisma(userId).medicalCenterService.createMany(params)
}

async function createOne(userId: string, params: Prisma.MedicalCenterServiceCreateArgs) {
  return await enhancedPrisma(userId).medicalCenterService.create(params)
}

async function updateMany(userId: string, params: Prisma.MedicalCenterServiceUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalCenterService.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.MedicalCenterServiceUpdateArgs) {
  return await enhancedPrisma(userId).medicalCenterService.update(params)
}

async function deleteMany(userId: string, params: Prisma.MedicalCenterServiceDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalCenterService.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.MedicalCenterServiceDeleteArgs) {
  return await enhancedPrisma(userId).medicalCenterService.delete(params)
}

export const MedicalCenterService = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
