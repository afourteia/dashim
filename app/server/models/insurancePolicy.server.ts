import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(
  params?: Prisma.InsurancePolicyFindManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.findMany(params)
}

async function getOne(
  params: Prisma.InsurancePolicyFindUniqueArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.findUnique(params)
}

async function createMany(
  params: Prisma.InsurancePolicyCreateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.createMany(params)
}

async function createOne(
  params: Prisma.InsurancePolicyCreateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.create(params)
}

async function updateMany(
  params: Prisma.InsurancePolicyUpdateManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.updateMany(params)
}

async function updateOne(
  params: Prisma.InsurancePolicyUpdateArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.update(params)
}

async function deleteMany(
  params: Prisma.InsurancePolicyDeleteManyArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.deleteMany(params)
}

async function deleteOne(
  params: Prisma.InsurancePolicyDeleteArgs,
  context?: { bypassMiddleware: boolean }
) {
  return await prisma.insurancePolicy.delete(params)
}

const InsurancePolicy = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default InsurancePolicy
