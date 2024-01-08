import { z } from 'zod';
import { InstitutionCreateWithoutPoliciesInputObjectSchema } from './InstitutionCreateWithoutPoliciesInput.schema';
import { InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedCreateWithoutPoliciesInput.schema';
import { InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema } from './InstitutionCreateOrConnectWithoutPoliciesInput.schema';
import { InstitutionUpsertWithoutPoliciesInputObjectSchema } from './InstitutionUpsertWithoutPoliciesInput.schema';
import { InstitutionWhereUniqueInputObjectSchema } from './InstitutionWhereUniqueInput.schema';
import { InstitutionUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUpdateWithoutPoliciesInput.schema';
import { InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedUpdateWithoutPoliciesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpdateOneRequiredWithoutPoliciesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InstitutionCreateWithoutPoliciesInputObjectSchema),
          z.lazy(
            () => InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => InstitutionCreateOrConnectWithoutPoliciesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => InstitutionUpsertWithoutPoliciesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => InstitutionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => InstitutionUpdateWithoutPoliciesInputObjectSchema),
          z.lazy(
            () => InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema =
  Schema;
