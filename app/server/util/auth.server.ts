import { User, type UserType } from '@server/models/user.server'
import { getSession } from './session.server'

export async function getUserIdFromCookie(
  request: Request
): Promise<UserType['id'] | undefined> {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')
  return userId
}

export async function getUserFromDb(
  request: Request
): Promise<UserType | null> {
  const userId = await getUserIdFromCookie(request)
  if (!userId) return null

  const user = await User.getOne(
    request,
    { where: { id: userId } },
    { bypassMiddleware: true }
  )
  return user
}

export async function getUserPreferenceFromCookie(
  request: Request
): Promise<any | null> {
  // placeHolder
  return null
}

export async function getUserPreferenceFromDb(
  request: Request
): Promise<any | null> {
  // placeHolder
  return null
}
