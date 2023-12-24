import { type LoaderFunctionArgs, redirect, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { User } from '~/server/models/user.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log('loader dashboard index')

  const users = await User.getMany(request, {})
  // const session = await getSession(request.headers.get('Cookie'))

  // console.log('session id', session.id)
  // console.log('session data', session.data)

  // if (!session.has('userId')) {
  //   // Redirect to the home page if they are already signed in.
  //   console.log('session does not have userId')
  //   throw redirect('/dashboard/login')
  // }

  return json(users)
}

export default function DashboardIndex() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <h2>dashboard index</h2>
      {data ? (
        data.map((item) => (
          <div key={item.id}>
            <div style={{ display: 'flex', gap: '10px' }}>
              {Object.entries(item).map(([key, value]) => (
                <p key={key}>
                  {key}: {JSON.stringify(value)}
                </p>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}
