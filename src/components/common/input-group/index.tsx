const InputGroup = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className='flex flex-col gap-x-3'>
      { children }
    </div>
  )
}

export default InputGroup