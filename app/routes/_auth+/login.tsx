import { ColorSchemeToggle } from '@components/ColorSchemeToggle/ColorSchemeToggle'
import UIDirection from '@components/UIDirection/UIDirection'
import {
  redirect,
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
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
import { _verifyLogin } from '~/server/controller/accounts.server'

export async function loader({ request }: LoaderFunctionArgs) {
  // console.log("loader('login')")
  // const session = await getSession(request.headers.get('Cookie'))

  // console.log('session id', session.id)
  // console.log('session data', session.data)

  // if (session.has('userId')) {
  //   // Redirect to the home page if they are already signed in.
  //   console.log('session already has userId', session.get('userId'))
  //   return redirect('/')
  // }

  // const data = { error: session.get('error') }

  // const user11 = await _verifyLogin({ email: 'dsf@fds.com', password: '1234' })

  return null

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action('login')")
  let formData = await request.formData()
  console.log('formData', formData)
  const session = await getSession(request.headers.get('Cookie'))
  console.log('session', session)

  // const user = User.getOne(request, {where : {username : formData.get('email')}})
  const userId = 'A2'

  if (userId == null) {
    await session.flash('error', 'Invalid email or password')
    return redirect('/login', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  }

  session.set('userId', userId)
  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export default function Login() {
  // const { error } = useLoaderData<typeof loader>()
  const error = null
  const actionData = useActionData<typeof action>()
  // const isPending = useIsPendin()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') || '/'
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  return (
    <div className='flex flex-col items-center'>
      <div className='flex w-fit pt-2 gap-7'>
        <ColorSchemeToggle />
        <UIDirection />
      </div>
      <div className=' w-fit'>
        {error ? <div className='error'>{error}</div> : null}
        <Form method='post'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <div className='mt-1'>
              <input
                ref={emailRef}
                id='email'
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={true}
                name='email'
                type='email'
                autoComplete='email'
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby='email-error'
                className='w-full rounded border border-gray-500 px-2 py-1 text-lg'
              />
              {actionData?.errors?.email ? (
                <div className='pt-1 text-red-700' id='email-error'>
                  {actionData.errors.email}
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
    </div>
  )
}
