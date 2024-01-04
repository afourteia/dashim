import { User, type UserType } from '@models/user.server'
import { getSession } from './session.server'
import { unGuardedPrisma } from '@config/db.server'

export async function getUserIdFromCookie(
  request: Request
): Promise<UserType['id'] | undefined | null> {
  const session = await getSession(request.headers.get('Cookie'))
  if (session.has('userId')) return session.get('userId')
  return null
}

export async function getUserFromDb(
  request: Request
): Promise<UserType | null> {
  const userId = await getUserIdFromCookie(request)
  if (!userId) return null

  // can't get this to work due to cyclic dependency
  // const user = await User.getOne(
  //   request,
  //   { where: { id: userId } },
  //   { bypassMiddleware: true }
  // )

  const user = await unGuardedPrisma.user.findUnique({ where: { id: userId } })
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
