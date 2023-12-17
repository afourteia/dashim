import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const InsurancePolicy = {
  getMany: middleware(async function getMany(
    params?: Prisma.InsurancePolicyFindManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.findMany(params)
  }),

  getOne: middleware(async function getOne(
    params: Prisma.InsurancePolicyFindUniqueArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.InsurancePolicyCreateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.InsurancePolicyCreateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.InsurancePolicyUpdateManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.InsurancePolicyUpdateArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.InsurancePolicyDeleteManyArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.InsurancePolicyDeleteArgs,
    context?: { bypassMiddleware: boolean }
  ) {
    return await prisma.insurancePolicy.delete(params)
  }),
}

export default InsurancePolicy
