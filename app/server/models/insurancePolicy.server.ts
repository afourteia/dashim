import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

const InsurancePolicy = {
  getMany: middleware(async function getMany(params?: Prisma.InsurancePolicyFindManyArgs) {
    return await prisma.insurancePolicy.findMany(params)
  }),

  getOne: middleware(async function getOne(params: Prisma.InsurancePolicyFindUniqueArgs) {
    return await prisma.insurancePolicy.findUnique(params)
  }),

  createMany: middleware(async function createMany(
    params: Prisma.InsurancePolicyCreateManyArgs
  ) {
    return await prisma.insurancePolicy.createMany(params)
  }),

  createOne: middleware(async function createOne(
    params: Prisma.InsurancePolicyCreateArgs
  ) {
    return await prisma.insurancePolicy.create(params)
  }),

  updateMany: middleware(async function updateMany(
    params: Prisma.InsurancePolicyUpdateManyArgs
  ) {
    return await prisma.insurancePolicy.updateMany(params)
  }),

  updateOne: middleware(async function updateOne(
    params: Prisma.InsurancePolicyUpdateArgs
  ) {
    return await prisma.insurancePolicy.update(params)
  }),

  deleteMany: middleware(async function deleteMany(
    params: Prisma.InsurancePolicyDeleteManyArgs
  ) {
    return await prisma.insurancePolicy.deleteMany(params)
  }),

  deleteOne: middleware(async function deleteOne(
    params: Prisma.InsurancePolicyDeleteArgs
  ) {
    return await prisma.insurancePolicy.delete(params)
  }),
}

export default InsurancePolicy
