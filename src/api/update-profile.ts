import { StoreProfileSchema } from '@/components/store-profile-dialog'
import { api } from '@/lib/axios'

export async function updateProfile({ name, description }: StoreProfileSchema) {
  // await new Promise((resolve, reject) => {
  //   setTimeout(reject, 2000)
  // })

  await api.put('/profile', {
    name,
    description,
  })
}
