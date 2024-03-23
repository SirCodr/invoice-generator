import { PDFViewer } from '@react-pdf/renderer'
import Pdf from './Pdf'
import Layout from './components/Layout'
import InvoiceForm from './components/invoice/form'
import { useInvoiceStore } from './store/invoiceStore'

const App = () => {
  const [invoice, preview] = useInvoiceStore(state => [state.invoice, state.preview])

  return (
    <Layout>
      <div className='flex flex-col gap-x-6 gap-y-4'>
        <InvoiceForm />
        {preview && (
          <PDFViewer >
            <Pdf invoice={invoice} />
          </PDFViewer>
        )}
      </div>
    </Layout>
  )
}

export default App
