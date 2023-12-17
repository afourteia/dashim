import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const BenefitPackage = {
  getMany: middleware(async function getMany(
    params?: Prisma.BenefitPackageFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.BenefitPackageFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.BenefitPackageCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.BenefitPackageCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.BenefitPackageUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.BenefitPackageUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.BenefitPackageDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.BenefitPackageDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.benefitPackage.delete(params)
  }),
}

export default BenefitPackage
