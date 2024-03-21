import { useInvoiceStore } from "../../../store/invoiceStore"

const InvoiceForm = () => {
  const setInvoiceName = useInvoiceStore((state) => state.setName)
  return (
    <form>
      <label htmlFor="">Name</label>
      <input onChange={(e) => setInvoiceName(e.target.value)} />
    </form>
  )
}

export default InvoiceForm
