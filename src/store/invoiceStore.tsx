import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Invoice, Item } from '../types/invoice'

interface invoiceState {
  invoice: Invoice
  setEmitterName: (name: string) => void
  setRecipientName: (name: string) => void
  setId: (id: string) => void
  setDate: (date: string) => void
  setDetails: (details: string) => void
  setItems: (items: Item[]) => void
  setTotal: (total: number) => void
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
  date: '',
  details: '',
  items: [{
    description: '',
    price: 0,
    quantity: 1,
    total: 0
  }],
  total: 0
}

export const useInvoiceStore = create<invoiceState>()(devtools((set) => ({
  invoice: INITIAL_INVOICE_DATA,
  setEmitterName: (name) => set((state) => ({ invoice: { ...state.invoice, emitter: { ...state.invoice.emitter, name } } })),
  setRecipientName: (name) => set((state) => ({ invoice: { ...state.invoice, recipient: { ...state.invoice.recipient, name } } })),
  setId: (id) => set((state) => ({ invoice: { ...state.invoice, id } })),
  setDate: (date) => set((state) => ({ invoice: { ...state.invoice, date } })),
  setDetails: (details) => set((state) => ({ invoice: { ...state.invoice, details } })),
  setItems: (items) => set((state) => ({ invoice: { ...state.invoice, items } })),
  setTotal: (total) => set((state) => ({ invoice: { ...state.invoice, total} }))
})))