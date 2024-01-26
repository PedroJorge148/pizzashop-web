import { api } from '@/lib/axios'

export interface GetOrderQuery {
  pageIndex?: number
}

interface getOrderResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrderQuery) {
  const response = await api.get<getOrderResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
