import { type LoaderFunctionArgs, redirect } from '@remix-run/node'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log('main index loader')
  return redirect('/dashboard')
}
