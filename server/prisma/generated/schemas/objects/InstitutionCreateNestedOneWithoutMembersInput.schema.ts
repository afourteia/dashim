import { z } from 'zod';
import { InstitutionCreateWithoutMembersInputObjectSchema } from './InstitutionCreateWithoutMembersInput.schema';
import { InstitutionUncheckedCreateWithoutMembersInputObjectSchema } from './InstitutionUncheckedCreateWithoutMembersInput.schema';
import { InstitutionCreateOrConnectWithoutMembersInputObjectSchema } from './InstitutionCreateOrConnectWithoutMembersInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionCreateNestedOneWithoutMembersInput> =
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
      connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const InstitutionCreateNestedOneWithoutMembersInputObjectSchema = Schema;
