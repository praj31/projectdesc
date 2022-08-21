import TextInputArray from '../reusable/form/TextInputArray'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

export const Roles = () => {
  return (
    <>
      <SectionTitle title='Roles' subtitle='Is it a solo or group project?' />
      <SectionElement title='People' note='Mention the name and the role.'>
        <TextInputArray
          placeholder='Pratikraj Rajput - Full Stack Engineer'
          section='roles'
          property='people'
          button_label='Add Person'
          placeholder_label='Person - Role'
        />
      </SectionElement>
      <SectionNavigation prev='Description' next='Built With' />
    </>
  )
}
