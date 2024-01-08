import { z } from 'zod';
import { InstitutionCreateWithoutMembersInputObjectSchema } from './InstitutionCreateWithoutMembersInput.schema';
import { InstitutionUncheckedCreateWithoutMembersInputObjectSchema } from './InstitutionUncheckedCreateWithoutMembersInput.schema';
import { InstitutionCreateOrConnectWithoutMembersInputObjectSchema } from './InstitutionCreateOrConnectWithoutMembersInput.schema';
import { InstitutionUpsertWithoutMembersInputObjectSchema } from './InstitutionUpsertWithoutMembersInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithoutMembersInputObjectSchema } from './InstitutionUpdateWithoutMembersInput.schema';
import { InstitutionUncheckedUpdateWithoutMembersInputObjectSchema } from './InstitutionUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpdateOneRequiredWithoutMembersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstitutionCreateWithoutMembersInputObjectSchema),
          z.lazy(
            () => InstitutionUncheckedCreateWithoutMembersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => InstitutionCreateOrConnectWithoutMembersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => InstitutionUpsertWithoutMembersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstitutionUpdateWithoutMembersInputObjectSchema),
          z.lazy(
            () => InstitutionUncheckedUpdateWithoutMembersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InstitutionUpdateOneRequiredWithoutMembersNestedInputObjectSchema =
  Schema;
