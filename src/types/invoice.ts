export interface Invoice {
  emitter: PersonInfo
  recipient: PersonInfo
  id: string
  date: string
  details: string
  items: Item[]
  total: number
}

type PersonInfo = {
    name: string
    address: string
    phone: string
  }

export type Item = {
  id: string
  description: string
  price: number
  quantity: number
  total: number
}