import { z } from 'zod';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionCreateWithoutMembersInputObjectSchema } from './InstitutionCreateWithoutMembersInput.schema';
import { InstitutionUncheckedCreateWithoutMembersInputObjectSchema } from './InstitutionUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionCreateOrConnectWithoutMembersInput> =
  z
    .object({
      where: z.lazy(() => InstitutionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InstitutionCreateWithoutMembersInputObjectSchema),
        z.lazy(() => InstitutionUncheckedCreateWithoutMembersInputObjectSchema),
      ]),
    })
    .strict();

export const InstitutionCreateOrConnectWithoutMembersInputObjectSchema = Schema;
