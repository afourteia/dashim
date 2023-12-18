import { prisma } from '~/server/util/db.server'
import type { Prisma } from '@prisma/client'
import { middleware } from '@server/util/middleware.server'

async function getMany(params?: Prisma.UserFindManyArgs) {
  return await prisma.user.findMany(params)
}

async function getOne(params: Prisma.UserFindUniqueArgs) {
  return await prisma.user.findUnique(params)
}

async function createMany(params: Prisma.UserCreateManyArgs) {
  return await prisma.user.createMany(params)
}

async function createOne(params: Prisma.UserCreateArgs) {
  return await prisma.user.create(params)
}

async function updateMany(params: Prisma.UserUpdateManyArgs) {
  return await prisma.user.updateMany(params)
}

async function updateOne(params: Prisma.UserUpdateArgs) {
  return await prisma.user.update(params)
}

async function deleteMany(params: Prisma.UserDeleteManyArgs) {
  return await prisma.user.deleteMany(params)
}

async function deleteOne(params: Prisma.UserDeleteArgs) {
  return await prisma.user.delete(params)
}

const User = {
  getMany: middleware(getMany),
  getOne: middleware(getOne),
  createMany: middleware(createMany),
  createOne: middleware(createOne),
  updateMany: middleware(updateMany),
  updateOne: middleware(updateOne),
  deleteMany: middleware(deleteMany),
  deleteOne: middleware(deleteOne),
}

export default User
