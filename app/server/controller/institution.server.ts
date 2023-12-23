import { z } from 'zod'
import { enhancedPrisma } from '../util/db.server'
import { Prisma } from '@prisma/client'

const addSubscribersDataSchema = z.array(
  z.object({
    id: z.string().cuid2(),
    institutionId: z.string().cuid2(),
    insurancePolicyId: z.string().cuid2(),
    SubscriberGroup: z.array(
      z.object({
        id: z.string().cuid2(),
        name: z.string(),
        code: z.string(),
        description: z.string().nullable(),
        insurancePolicyId: z.string().cuid2(),
        institutionId: z.string().cuid2(),
        createdAt: z.date(),
        updatedAt: z.date(),
        published: z.boolean(),
        softDeleted: z.boolean(),
        isActive: z.boolean(),
        deactivationReason: z.string().nullable(),
      })
    ),
  })
)

type addSubscribersData = z.infer<typeof addSubscribersDataSchema>

export async function _addSubscribers(
  userId: string,
  data: addSubscribersData
) {
  const MAX_RETRIES = 5
  let retries = 0

  const validUser = addSubscribersDataSchema.parse(data)

  while (true) {
    try {
      return await enhancedPrisma(userId).$transaction(
        async (tx) => {
          // Code running in a transaction...
          const subscribers = await tx.subscriber.createMany({
            data: params.data,
          })
        },
        {
          //   maxWait: 5000, // default: 2000
          //   timeout: 10000, // default: 5000
          isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
        }
      )
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2034') {
          retries++
          if (retries >= MAX_RETRIES) {
            throw error
          }
          continue
        }
      }
      throw error
    }
  }
}
