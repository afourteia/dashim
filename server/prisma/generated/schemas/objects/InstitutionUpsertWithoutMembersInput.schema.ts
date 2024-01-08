import { z } from 'zod';
import { InstitutionUpdateWithoutMembersInputObjectSchema } from './InstitutionUpdateWithoutMembersInput.schema';
import { InstitutionUncheckedUpdateWithoutMembersInputObjectSchema } from './InstitutionUncheckedUpdateWithoutMembersInput.schema';
import { InstitutionCreateWithoutMembersInputObjectSchema } from './InstitutionCreateWithoutMembersInput.schema';
import { InstitutionUncheckedCreateWithoutMembersInputObjectSchema } from './InstitutionUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpsertWithoutMembersInput> = z
  .object({
    update: z.union([
      z.lazy(() => InstitutionUpdateWithoutMembersInputObjectSchema),
      z.lazy(() => InstitutionUncheckedUpdateWithoutMembersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InstitutionCreateWithoutMembersInputObjectSchema),
      z.lazy(() => InstitutionUncheckedCreateWithoutMembersInputObjectSchema),
    ]),
  })
  .strict();

export const InstitutionUpsertWithoutMembersInputObjectSchema = Schema;
