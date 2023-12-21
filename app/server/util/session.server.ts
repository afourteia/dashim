// app/sessions.ts
import { createCookieSessionStorage } from '@remix-run/node' // or cloudflare/deno

const secret = process.env.COOKIE_SECRET || 's3cr3t'
if (secret === 's3cr3t') {
  console.warn(
    'Warning: COOKIE_SECRET is not set. This is insecure and not recommended.'
  )
}

type SessionData = {
  userId: string
}

type SessionFlashData = {
  error: string
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: '__session',

      // all of these are optional
      //   domain: 'remix.run',
      path: '/',
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',

      sameSite: 'lax',
      secrets: [secret],
      maxAge: 10 * 1 * 1 * 1, // 1 hour
    },
  })

export { getSession, commitSession, destroySession }
