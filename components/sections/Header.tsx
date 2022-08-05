import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

export const HeaderSection = () => {
  return (
    <>
      <SectionTitle
        title='Header'
        subtitle="Grab your reader's attention with a flashy header!"
      />
      <SectionNavigation next='Description' />
    </>
  )
}
