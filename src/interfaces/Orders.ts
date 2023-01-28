export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface IOrderService {
  status: number,
  payload: IOrder[];
}