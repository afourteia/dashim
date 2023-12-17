import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const MedicalCenterServiceTemplate = {
  getMany: middleware(async function getMany(
    params?: Prisma.MedicalCenterServiceTemplateFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.MedicalCenterServiceTemplateFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.MedicalCenterServiceTemplateCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.MedicalCenterServiceTemplateCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.MedicalCenterServiceTemplateUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.MedicalCenterServiceTemplateUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.MedicalCenterServiceTemplateDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.MedicalCenterServiceTemplateDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.medicalCenterServiceTemplate.delete(params)
  }),
}

export default MedicalCenterServiceTemplate
