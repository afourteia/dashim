let createCookieSessionStorage

try {
  createCookieSessionStorage =
    require('@remix-run/node').createCookieSessionStorage
} catch (error) {
  console.error('Failed to load createCookieSessionStorage:', error)

  // Placeholder function
  createCookieSessionStorage = () => {
    console.warn(
      'createCookieSessionStorage is not available. Using placeholder function.'
    )
    // Return a default value or do nothing
  }
}

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
      maxAge: 60 * 15 * 1 * 1, // `15 minutes
    },
  })

export { getSession, commitSession, destroySession }
