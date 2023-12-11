import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from '@remix-run/node'

export async function loader({ request }: LoaderFunctionArgs) {
  console.log('calling emitter')
  throw new Error('hello from the other side')
  return json({ message: 'hello' })
}

export async function action({ request }: ActionFunctionArgs) {
  const method = request.method
  console.log('method', method)
  console.log('call action')
  return json({ message: 'hello from action' })
}
