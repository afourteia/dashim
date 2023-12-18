import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(params?: Prisma.BenefitPackageFindManyArgs) {
  return await prisma.benefitPackage.findMany(params)
}

async function getOne(params: Prisma.BenefitPackageFindUniqueArgs) {
  return await prisma.benefitPackage.findUnique(params)
}

async function createMany(params: Prisma.BenefitPackageCreateManyArgs) {
  return await prisma.benefitPackage.createMany(params)
}

async function createOne(params: Prisma.BenefitPackageCreateArgs) {
  return await prisma.benefitPackage.create(params)
}

async function updateMany(params: Prisma.BenefitPackageUpdateManyArgs) {
  return await prisma.benefitPackage.updateMany(params)
}

async function updateOne(params: Prisma.BenefitPackageUpdateArgs) {
  return await prisma.benefitPackage.update(params)
}

async function deleteMany(params: Prisma.BenefitPackageDeleteManyArgs) {
  return await prisma.benefitPackage.deleteMany(params)
}

async function deleteOne(params: Prisma.BenefitPackageDeleteArgs) {
  return await prisma.benefitPackage.delete(params)
}

const BenefitPackage = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default BenefitPackage
