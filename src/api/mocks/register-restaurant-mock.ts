import { http, HttpResponse } from 'msw'

import { SignUp } from '@/pages/auth/sign-up'

export const registerRestaurantMock = http.post<never, SignUp>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
