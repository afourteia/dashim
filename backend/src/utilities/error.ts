import { TRPC_ERROR_CODE_KEY } from '@trpc/server/dist/rpc/codes'
export default class ServerError extends Error {
  code: TRPC_ERROR_CODE_KEY

  constructor(e: { message: string; code: TRPC_ERROR_CODE_KEY }) {
    super(e.message)
    this.code = e.code
  }
}
