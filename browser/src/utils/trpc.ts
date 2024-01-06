import type { AppRouter } from "../../../backend/src/router/_router";
import { createTRPCReact } from "@trpc/react-query";
export const trpc = createTRPCReact<AppRouter>();
