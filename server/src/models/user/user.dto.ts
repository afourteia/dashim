import { z } from 'nestjs-zod/z';
import { User } from '@prisma/client'; // to infer types from database. To do later

export const EmailAndPassword = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Export the inferred type as well
export type EmailAndPasswordType = z.infer<typeof EmailAndPassword>;
