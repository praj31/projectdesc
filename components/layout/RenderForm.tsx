import BuiltWithSection from '../sections/BuiltWith'
import ContactSection from '../sections/Contact'
import DescriptionSection from '../sections/Description'
import HeaderSection from '../sections/Header'
import RolesSection from '../sections/Roles'
import ScreenshotsSection from '../sections/Screenshots'
import { useStore } from '../../store'

const RenderForm = () => {
  const activeSection = useStore((state) => state.activeSection)
  return <section className='section'>{displaySection(activeSection)}</section>
}

const displaySection = (section: string) => {
  switch (section) {
    case 'Header':
      return <HeaderSection />
    case 'Description':
      return <DescriptionSection />
    case 'Roles':
      return <RolesSection />
    case 'Built With':
      return <BuiltWithSection />
    case 'Screenshots':
      return <ScreenshotsSection />
    case 'Contact':
      return <ContactSection />
    default:
      return null
  }
}

export default RenderForm
