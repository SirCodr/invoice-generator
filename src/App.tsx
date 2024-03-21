import { PDFViewer } from '@react-pdf/renderer'
import Pdf from './Pdf'
import Layout from './components/Layout'
import InvoiceForm from './components/invoice/form'
import { useInvoiceStore } from './store/invoiceStore'

const App = () => {
  const invoice = useInvoiceStore(state => state.invoice)

  return (
    <Layout>
      <div className='flex flex-col gap-x-6'>
        <InvoiceForm />
        <PDFViewer >
          <Pdf invoice={invoice} />
        </PDFViewer>
      </div>
    </Layout>
  )
}

export default App
