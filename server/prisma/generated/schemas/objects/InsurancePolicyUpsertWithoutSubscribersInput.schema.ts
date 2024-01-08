import { z } from 'zod';
import { InsurancePolicyUpdateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUpdateWithoutSubscribersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutSubscribersInput.schema';
import { InsurancePolicyCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateWithoutSubscribersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutSubscribersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithoutSubscribersInput> = z
  .object({
    update: z.union([
      z.lazy(() => InsurancePolicyUpdateWithoutSubscribersInputObjectSchema),
      z.lazy(
        () => InsurancePolicyUncheckedUpdateWithoutSubscribersInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => InsurancePolicyCreateWithoutSubscribersInputObjectSchema),
      z.lazy(
        () => InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const InsurancePolicyUpsertWithoutSubscribersInputObjectSchema = Schema;
