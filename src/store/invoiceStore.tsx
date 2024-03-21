import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface invoiceState {
  invoice: { name: string }
  setName: (name: string) => void
}

export const useInvoiceStore = create<invoiceState>()(devtools((set) => ({
  invoice: { name: '' },
  setName: (name) => set(() => ({ invoice: { name } }))
})))