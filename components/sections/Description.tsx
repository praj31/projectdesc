import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

export const DescriptionSection = () => {
  return (
    <>
      <SectionTitle
        title='Description'
        subtitle="Let's dig into the juicy details of your project."
      />
      <SectionNavigation prev='Header' next='People Involved' />
    </>
  )
}
