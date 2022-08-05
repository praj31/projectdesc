import SectionNavigation from './SectionNavigation'

type Props = {
  title: string
  subtitle: string
}

const SectionTitle = (props: Props) => {
  return (
    <>
      <h1 className='section-title'>{props.title}</h1>
      <p className='section-subtitle'>{props.subtitle}</p>
    </>
  )
}
export default SectionTitle
