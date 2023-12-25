import { type ActionFunctionArgs, redirect } from '@remix-run/node'
import { getSession } from '~/server/util/session.server'

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log('Logging out')
  const session = await getSession(request.headers.get('Cookie'))
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  })
}

export const loader = async () => redirect('/')
