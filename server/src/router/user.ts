import { router, publicProcedure } from "./_trpc";
import { z } from "zod";
import { User, type UserType } from "@models/user";
import { TRPCError } from "@trpc/server";
import ServerError from "~/utilities/error";

type test = UserType;

export const userRouter = router({
  // GET http://localhost:3000/trpc/user.getOne?input="test"
  getMany: publicProcedure.query(async (opts) => {
    try {
      return await User.getMany(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),
  getOne: publicProcedure.query(async (opts) => {
    try {
      return await User.getOne(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),
  // POST http://localhost:3000/trpc/user.createOne with body { name: "test" }
  createOne: publicProcedure.mutation(async (opts) => {
    try {
      return await User.createOne(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),

  createMany: publicProcedure.mutation(async (opts) => {
    try {
      return await User.createMany(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),

  updateOne: publicProcedure.mutation(async (opts) => {
    try {
      return await User.updateOne(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),

  updateMany: publicProcedure.mutation(async (opts) => {
    try {
      return await User.updateMany(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),

  deleteOne: publicProcedure.mutation(async (opts) => {
    try {
      return await User.deleteOne(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),

  deleteMany: publicProcedure.mutation(async (opts) => {
    try {
      return await User.deleteMany(opts.ctx.req, opts.input);
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message });
      } else {
        throw error;
      }
    }
  }),
});
