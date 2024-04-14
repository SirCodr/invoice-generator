const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <main className='flex flex-col gap-y-4 h-screen'>
      {children}
    </main>
  )
}

export default Layout
