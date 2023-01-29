export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number
}

export interface IProductService {
  status: number,
  payload: IProduct[]
}
