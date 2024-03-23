import { Button } from 'primereact/button'
import { useInvoiceStore } from '../../store/invoiceStore'

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [preview, togglePreview] = useInvoiceStore((state) => [
    state.preview,
    state.togglePreview
  ])

  return (
    <main className='flex flex-col gap-y-4'>
      <header>
        <Button
          type='button'
          label={preview ? 'Ocultar' : 'Mostrar'}
          onClick={togglePreview}
        />
      </header>
      {children}
    </main>
  )
}

export default Layout
