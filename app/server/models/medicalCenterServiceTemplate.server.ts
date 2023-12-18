import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.MedicalCenterServiceTemplateFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.findMany(params)
}

async function getOne(
  params: Prisma.MedicalCenterServiceTemplateFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.findUnique(params)
}

async function createMany(
  params: Prisma.MedicalCenterServiceTemplateCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.createMany(params)
}

async function createOne(
  params: Prisma.MedicalCenterServiceTemplateCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.create(params)
}

async function updateMany(
  params: Prisma.MedicalCenterServiceTemplateUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.updateMany(params)
}

async function updateOne(
  params: Prisma.MedicalCenterServiceTemplateUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.update(params)
}

async function deleteMany(
  params: Prisma.MedicalCenterServiceTemplateDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.deleteMany(params)
}

async function deleteOne(
  params: Prisma.MedicalCenterServiceTemplateDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.medicalCenterServiceTemplate.delete(params)
}

const MedicalCenterServiceTemplate = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default MedicalCenterServiceTemplate
