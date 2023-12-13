import { PrismaClient } from '@prisma/client'
import { enhance } from '@zenstackhq/runtime'
import { singleton } from '@server/singleton.server.ts'

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton('prisma', () =>
  enhance(
    new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    }),
    {},
    { logPrismaQuery: true }
  )
)
prisma.$connect()

export { prisma }
