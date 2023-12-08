import { prisma } from '@server/db.server.ts'
import type { Prisma } from '@prisma/client'

function loggedMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log('decorator bound to: ', target, propertyName, descriptor)
  const originalMethod = descriptor.value

  descriptor.value = async function (...args: any[]) {
    console.log(`LOG: Entering ${target.name}.${propertyName}`)
    const result = await originalMethod.apply(this, args)
    console.log(`LOG: Exiting ${target.name}.${propertyName}`)
    return result
  }

  return descriptor
}

export default class User {
  @loggedMethod
  static async logger() {
    console.log('just some logger')
  }

  @loggedMethod static async getMany(params?: Prisma.UserFindManyArgs) {
    return await prisma.user.findMany(params)
  }

  @loggedMethod
  static async createOne(params: Prisma.UserCreateArgs) {
    return await prisma.user.create(params)
  }

  @loggedMethod
  static async getNotesMany(params?: Prisma.NoteFindManyArgs) {
    return await prisma.note.findMany(params)
  }
}
