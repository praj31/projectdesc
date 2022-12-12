type Props = {
  title: string
  children: React.ReactNode
  note?: string
}

const SectionElement = (props: Props) => {
  return (
    <div className='sec-elem'>
      <h2 className='sec-elem-title'>{props.title}</h2>
      {props.note && <p className='sec-elem-note'>{props.note}</p>}
      <>{props.children}</>
    </div>
  )
}

export default SectionElement
