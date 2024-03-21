import { useInvoiceStore } from "../../../store/invoiceStore"
import { InputText } from 'primereact/inputtext';
import InputGroup from "../../common/input-group";
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const InvoiceForm = () => {
  const [
    invoice,
    setEmitterName,
    setRecipientName, 
    setId,
    setDate
  ] = useInvoiceStore((state) => [
    state.invoice,
    state.setEmitterName, 
    state.setRecipientName, 
    state.setId,
    state.setDate
  ])

  return (
    <article className="w-full px-14 bg-[#ECF0F2]">
    <form className="w-full p-2 bg-white">
      <header>
        Factura
        <InputGroup>
          <label htmlFor="invoiceId">ID</label>
          <InputText className="border border-black" value={invoice.id} onChange={(e) => setId(e.target.value)} id="invoiceId" />
        </InputGroup>
      </header>
      <section className="flex flex-col">
        <aside>
          <InputGroup>
            <label htmlFor="emitter">Emisor</label>
            <InputText className="border border-black" id="emitter" value={invoice.emitter.name} onChange={(e) => setEmitterName(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <label htmlFor="recipient">Receptor</label>
            <InputText className="border border-black" id="recipient" value={invoice.recipient.name} onChange={(e) => setRecipientName(e.target.value)} />
          </InputGroup>
        </aside>
        <aside>
          <InputGroup>
            <label htmlFor="">Fecha</label>
            <Calendar className="border border-black" value={invoice.date} onChange={(e) => setDate(e.value.getTime())} />
          </InputGroup>
        </aside>
      </section>
      <section>
        <div className="flex gap-x-3">
          <span>Item</span>
          <span>Cantidad</span>
          <span>Precio</span>
          <span>Total</span>
        </div>
        <InputGroup>
          <InputTextarea className="border border-black" placeholder="Descripción del producto"
           value={invoice.items[0].description} cols={30} rows={1} />
          <InputNumber className="border border-black" value={invoice.items[0].quantity} />
          <InputText className="border border-black" value={invoice.items[0].price.toString()} />
          <span>$0.0</span>
        </InputGroup>
        <div>
          <Button label="Agregar Item" />
        </div>
      </section>
      <section>
        <Button label="Descargar Factura" severity="success" />
      </section>
    </form>
    </article>
  )
}

export default InvoiceForm
