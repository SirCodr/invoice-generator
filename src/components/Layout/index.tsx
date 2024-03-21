import { PDFDownloadLink } from "@react-pdf/renderer"
import Pdf from "../../Pdf"
import { useInvoiceStore } from "../../store/invoiceStore"

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const invoice = useInvoiceStore(state => state.invoice)

  return (
    <main className='flex flex-col'>
      <header>
        <PDFDownloadLink document={<Pdf invoice={invoice} />} fileName='pdf.pdf'>
          Descargar
        </PDFDownloadLink>
      </header>
      {children}
    </main>
  )
}

export default Layout