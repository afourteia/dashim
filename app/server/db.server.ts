import { Prisma, PrismaClient } from '@prisma/client'
import { enhance } from '@zenstackhq/runtime'
import { singleton } from '@server/singleton.server.ts'

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton('prisma', () =>
  enhance(
    new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    }).$extends({
      model: {
        $allModels: {
          async getTableName<T>(this: T) {
            const context = Prisma.getExtensionContext(this) as any
            return (prisma as any)._runtimeDataModel.models[context.name].dbName
          },
        },
      },
    }),
    {},
    { logPrismaQuery: true }
  )
)
prisma.$connect()

export { prisma }
