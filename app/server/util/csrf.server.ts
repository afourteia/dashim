// app/utils/csrf.server.ts
import { CSRF } from 'remix-utils/csrf/server'
import { type LoaderFunctionArgs, createCookie, json } from '@remix-run/node' // or cloudflare/deno

const secret = process.env.COOKIE_SECRET || 's3cr3t'
if (secret === 's3cr3t') {
  console.warn(
    'Warning: COOKIE_SECRET is not set. This is insecure and not recommended.'
  )
}

export const sessionCookie = createCookie('session', {
  path: '/',
  httpOnly: process.env.NODE_ENV === 'production',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  secrets: [secret],
  maxAge: 60 * 60 * 24 * 30, // 30 days
})

export const csrfCookie = createCookie('csrf', {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  secrets: [secret],
  maxAge: 60 * 60 * 24 * 30, // 30 days
})

export const csrf = new CSRF({
  cookie: csrfCookie,
  // what key in FormData objects will be used for the token, defaults to `csrf`
  formDataKey: 'csrf',
  // an optional secret used to sign the token, recommended for extra safety
  secret: process.env.csrfSecret,
})

export async function loader({ request }: LoaderFunctionArgs) {
  let [token, cookieHeader] = await csrf.commitToken()
  return json({ token }, { headers: { 'set-cookie': cookieHeader } })
}
