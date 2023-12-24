import {
  redirect,
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams,
} from '@remix-run/react'
import { getSession, commitSession } from '@server/util/session.server'
import { useRef } from 'react'
import { procedure } from '~/server/controller/_procedure.server'
import { getUserFromDb } from '~/server/util/auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
  console.log('login loader')

  const user = await getUserFromDb(request)

  if (user != null) {
    console.log("user found, redirect to '/dashboard'")
    return redirect('/dashboard')
  }

  // console.log("loader('login')")
  const session = await getSession(request.headers.get('Cookie'))

  // console.log('session id', session.id)
  // console.log('session data', session.data)

  // if (session.has('userId')) {
  //   // Redirect to the home page if they are already signed in.
  //   console.log('session already has userId', session.get('userId'))
  //   return redirect('/')
  // }

  const data = { error: session.get('error') }

  // const user11 = await _verifyLogin({ email: 'dsf@fds.com', password: '1234' })

  // return null

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export async function action({ request }: ActionFunctionArgs) {
  console.log('login action')
  const formData = await request.formData()
  console.log('formData', formData)
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const user = await procedure.verifyLogin({ username, password })
  // const user = User.getOne(request, {where : {username : formData.get('email')}})
  const session = await getSession(request.headers.get('Cookie'))

  if (!user) {
    console.log('invalid username or password')
    await session.flash('error', 'Invalid username or password')
    return json(
      { errors: { email: 'Invalid email or password', password: null } },
      {
        status: 400,
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      }
    )
    return redirect('/dashboard/login', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  }

  session.set('userId', user.id)
  return redirect('/dashboard/login', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export const meta: MetaFunction = () => [{ title: 'Login' }]

export default function Login() {
  const { error } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  // const isPending = useIsPendin()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') || '/'
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  return (
    <div className=' min-w-96 max-w-fit self-center'>
      {error ? <div className='error'>{error}</div> : null}
      <Form method='post'>
        <div>
          <label
            htmlFor='username'
            className='block text-sm font-medium text-gray-700'
          >
            username
          </label>
          <div className='mt-1'>
            <input
              ref={usernameRef}
              id='username'
              required
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              name='username'
              type='username'
              autoComplete='username'
              aria-invalid={actionData?.errors?.username ? true : undefined}
              aria-describedby='username-error'
              className='w-full rounded border border-gray-500 px-2 py-1 text-lg'
            />
            {actionData?.errors?.username ? (
              <div className='pt-1 text-red-700' id='username-error'>
                {actionData.errors.username}
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <div className='mt-1'>
            <input
              id='password'
              ref={passwordRef}
              name='password'
              type='password'
              autoComplete='current-password'
              aria-invalid={actionData?.errors?.password ? true : undefined}
              aria-describedby='password-error'
              className='w-full rounded border border-gray-500 px-2 py-1 text-lg'
            />
            {actionData?.errors?.password ? (
              <div className='pt-1 text-red-700' id='password-error'>
                {actionData.errors.password}
              </div>
            ) : null}
          </div>
        </div>

        <input type='hidden' name='redirectTo' value={redirectTo} />
        <button
          type='submit'
          className='w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400'
        >
          Log in
        </button>
      </Form>
    </div>
  )
}
