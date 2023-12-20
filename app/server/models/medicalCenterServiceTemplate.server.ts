import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

export type { MedicalCenterServiceTemplate as MedicalCenterServiceTemplateType } from '@prisma/client'

async function getMany(params?: Prisma.MedicalCenterServiceTemplateFindManyArgs) {
  return await prisma.medicalCenterServiceTemplate.findMany(params)
}

async function getOne(params: Prisma.MedicalCenterServiceTemplateFindUniqueArgs) {
  return await prisma.medicalCenterServiceTemplate.findUnique(params)
}

async function createMany(params: Prisma.MedicalCenterServiceTemplateCreateManyArgs) {
  return await prisma.medicalCenterServiceTemplate.createMany(params)
}

async function createOne(params: Prisma.MedicalCenterServiceTemplateCreateArgs) {
  return await prisma.medicalCenterServiceTemplate.create(params)
}

async function updateMany(params: Prisma.MedicalCenterServiceTemplateUpdateManyArgs) {
  return await prisma.medicalCenterServiceTemplate.updateMany(params)
}

async function updateOne(params: Prisma.MedicalCenterServiceTemplateUpdateArgs) {
  return await prisma.medicalCenterServiceTemplate.update(params)
}

async function deleteMany(params: Prisma.MedicalCenterServiceTemplateDeleteManyArgs) {
  return await prisma.medicalCenterServiceTemplate.deleteMany(params)
}

async function deleteOne(params: Prisma.MedicalCenterServiceTemplateDeleteArgs) {
  return await prisma.medicalCenterServiceTemplate.delete(params)
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
