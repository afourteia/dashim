import { createId } from '@paralleldrive/cuid2'

/*
const myFunction = HOF1(HOF2(HOF3(originalFunction)));
Order of calls are
1. HOF3
2. HOF2
3. HOF1
4. originalFunction
*/

export function HOF(OG: (...args: any[]) => any, defaultParamHOF: number = 10) {
  return function (paramHOF: number = defaultParamHOF, ...args: any[]) {
    console.log(`HOF parameter: ${paramHOF}`)
    // HOF can interpret or modify the arguments here
    const modifiedArgs = args.map((arg) => arg + paramHOF)
    return OG(...modifiedArgs)
  }
}

export function middleware<T extends (...args: any[]) => any>(
  originalMethod: T
): (context?: {
  bypassMiddleware?: boolean
}) => (...args: Parameters<T>) => ReturnType<T> {
  return function (context = { bypassMiddleware: true }) {
    return function (...args: Parameters<T>): ReturnType<T> {
      const { bypassMiddleware = true } = context
      if (bypassMiddleware) {
        return originalMethod(...args)
      }
      // Apply middleware logic here
      return originalMethod(...args)
    }
  }
  return log(addCUID2(originalMethod))
}

export function addCUID2<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
): T {
  return async function (...args: Parameters<T>) {
    console.log(`CUID2: Entering ${originalMethod.name}`)
    // Check if data argument exists and if it has an id property
    const data = (args as any[]).find((arg) => typeof arg === 'object')
    if (data && !data.id) {
      console.log('CUID2: Adding cuid2 to data')
      data.id = createId() // Generate a cuid2 if id doesn't exist
    }
    const result = await originalMethod.apply(this, args)
    console.log(`CUID2: Exiting ${originalMethod.name}`)
    return result
  } as any as T
}

export function log<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
): T {
  return async function (...args: Parameters<T>) {
    console.log(`LOG: Entering ${originalMethod.name}`)
    const result = await originalMethod(...args)
    console.log(`LOG: Exiting ${originalMethod.name}`)
    return result
  } as any as T as any as T
}

export function auth<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
): T {
  return async function (...args: Parameters<T>) {
    console.log(`AUTH: Entering ${originalMethod.name}`)
    const result = await originalMethod.apply(this, args)
    console.log(`AUTH: Exiting ${originalMethod.name}`)
    return result
  } as any as T
}

export function validate<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
): T {
  return async function (...args: Parameters<T>) {
    console.log(`VALIDATE: Entering ${originalMethod.name}`)
    const result = await originalMethod.apply(this, args)
    console.log(`VALIDATE: Exiting ${originalMethod.name}`)
    return result
  } as any as T
}

export function errorHandler<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
): T {
  return async function (...args: Parameters<T>) {
    try {
      return await originalMethod.apply(this, args)
    } catch (error) {
      console.error(`ERROR: ${error.message}`)
      throw error
    }
  } as any as T
}

export function rateLimiter<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
): T {
  // Implement rate limiting logic here
  return async function (...args: Parameters<T>) {
    return await originalMethod.apply(this, args)
  } as any as T
}
