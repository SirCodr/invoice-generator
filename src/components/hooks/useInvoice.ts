import { useInvoiceStore } from '../../store/invoiceStore'

const useInvoice = () => {
  const [
    invoice,
    setEmitterName,
    setRecipientName,
    setId,
    setDate,
    addItem,
    updateItemPropById
  ] = useInvoiceStore((state) => [
    state.invoice,
    state.setEmitterName,
    state.setRecipientName,
    state.setId,
    state.setDate,
    state.addItem,
    state.updateItemPropById,
    state.setTotal
  ])

  return {
    invoice,
    setEmitterName,
    setRecipientName,
    setId,
    setDate,
    addItem,
    updateItemPropById
  }
}

export default useInvoice
