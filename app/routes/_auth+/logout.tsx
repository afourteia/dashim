import { ActionFunctionArgs, redirect } from '@remix-run/node'

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log('Logging out')
  return null
}

export const loader = async () => redirect('/')
