import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Invoice, Item } from '../types/invoice'
import { DateTime } from 'luxon'

interface invoiceState {
  invoice: Invoice
  setEmitterName: (name: string) => void
  setRecipientName: (name: string) => void
  setId: (id: string) => void
  setDate: (date: string) => void
  setDetails: (details: string) => void
  setItems: (items: Item[]) => void
  setTotal: (total: number) => void
  addItem: () => void
  updateItemPropById: (id: string, key: keyof Item, value: unknown) => void
}

const INITIAL_ITEM_DATA: Item = {
  id: crypto.randomUUID(),
  description: '',
  price: 0,
  quantity: 1,
  total: 0
}

const INITIAL_INVOICE_DATA: Invoice = {
  emitter: {
    name: '',
    address: '',
    phone: ''
  },
  recipient: {
    name: '',
    address: '',
    phone: ''
  },
  id: '',
  date: DateTime.now().toISODate(),
  details: '',
  items: [INITIAL_ITEM_DATA],
  total: 0
}

export const useInvoiceStore = create<invoiceState>()(
  devtools((set) => ({
    invoice: INITIAL_INVOICE_DATA,
    setEmitterName: (name) =>
      set((state) => ({
        invoice: {
          ...state.invoice,
          emitter: { ...state.invoice.emitter, name }
        }
      })),
    setRecipientName: (name) =>
      set((state) => ({
        invoice: {
          ...state.invoice,
          recipient: { ...state.invoice.recipient, name }
        }
      })),
    setId: (id) => set((state) => ({ invoice: { ...state.invoice, id } })),
    setDate: (date) =>
      set((state) => ({ invoice: { ...state.invoice, date } })),
    setDetails: (details) =>
      set((state) => ({ invoice: { ...state.invoice, details } })),
    setItems: (items) =>
      set((state) => ({ invoice: { ...state.invoice, items } })),
    setTotal: (total) =>
      set((state) => ({ invoice: { ...state.invoice, total } })),
    addItem: () =>
      set((state) => ({
        invoice: {
          ...state.invoice,
          items: [
            ...state.invoice.items,
            { ...INITIAL_ITEM_DATA, id: crypto.randomUUID() }
          ]
        }
      })),
    updateItemPropById: (id, key, value) => set(state => {
      if (!id || key === 'id') return { invoice:{ ...state.invoice } }

      const itemsDraft = state.invoice.items.map(item => {
        if (item.id !== id) return item

        const itemDraft = {...item, [key]: value}

        if (key === 'price' || key === 'quantity') {
          itemDraft.total = (itemDraft.price * itemDraft.quantity)
        }

        return itemDraft
      })

      return { invoice: { ...state.invoice, items: itemsDraft } }
    })
  }))
)
