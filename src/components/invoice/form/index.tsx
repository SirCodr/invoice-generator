import { useInvoiceStore } from "../../../store/invoiceStore"

const InvoiceForm = () => {
  const [ setEmitterName ] = useInvoiceStore((state) => [ state.setEmitterName ])

  return (
    <article>
      <form>
      <header>
        Factura
      </header>
      <div className="flex flex-col">
        <section>
          <div className="flex gap-x-3">
            <label htmlFor="">Emisor</label>
            <input type="text" className="border border-black" onChange={(e) => setEmitterName(e.target.value)} />
          </div>
        </section>
        <section>
          <div className="flex gap-x-3">
            <label htmlFor="">Fecha</label>
            <input type="text" className="border border-black" />
          </div>
        </section>
      </div>
    </form>
    </article>
  )
}

export default InvoiceForm
