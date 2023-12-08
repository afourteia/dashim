import type { LoaderFunctionArgs } from '@remix-run/node'
import { globalEmitter } from '~/server/emitter.server.ts'

export async function loader({ request }: LoaderFunctionArgs) {
  console.log('calling emitter')
  globalEmitter.emit('customEvent', 'Hello from Istefsar Chat')
  return null
}

export default function IstefsarChat() {
  return (
    <div>
      <h2>Istefsar Chat</h2>
    </div>
  )
}
