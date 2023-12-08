import { useEventSource } from 'remix-utils/sse/react'

export default function Chat() {
  // Here `/sse/time` is the resource route returning an eventStream response
  let paragraph = useEventSource('/sse/message', { event: 'message' })
  let paragraphStatus = useEventSource('/sse/message', { event: 'message1' })

  if (typeof paragraph !== 'string' || !paragraph) return null

  return (
    <div>
      <h1>{paragraphStatus}</h1> <p>{paragraph}</p>{' '}
    </div>
  )
}
