import { enhancedPrisma } from '@server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { MedicalCenterServiceTemplate as MedicalCenterServiceTemplateType } from '@prisma/client'

async function getMany(userId: string, params?: Prisma.MedicalCenterServiceTemplateFindManyArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.findMany(params)
}

async function getOne(userId: string, params: Prisma.MedicalCenterServiceTemplateFindUniqueArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.findUnique(params)
}

async function createMany(userId: string, params: Prisma.MedicalCenterServiceTemplateCreateManyArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.createMany(params)
}

async function createOne(userId: string, params: Prisma.MedicalCenterServiceTemplateCreateArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.create(params)
}

async function updateMany(userId: string, params: Prisma.MedicalCenterServiceTemplateUpdateManyArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.updateMany(params)
}

async function updateOne(userId: string, params: Prisma.MedicalCenterServiceTemplateUpdateArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.update(params)
}

async function deleteMany(userId: string, params: Prisma.MedicalCenterServiceTemplateDeleteManyArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.deleteMany(params)
}

async function deleteOne(userId: string, params: Prisma.MedicalCenterServiceTemplateDeleteArgs) {
  return await enhancedPrisma(userId).medicalCenterServiceTemplate.delete(params)
}

export const MedicalCenterServiceTemplate = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}
