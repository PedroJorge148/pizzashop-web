import { api } from '@/lib/axios'
import { SignUp } from '@/pages/auth/sign-up'

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: SignUp) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
