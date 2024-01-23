import { api } from '@/lib/axios'
import { SignIn } from '@/pages/auth/sign-in'

export async function signIn({ email }: SignIn) {
  await api.post('/authenticate', { email })
}
