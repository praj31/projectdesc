import { useStore } from '../../../store'
import useStoreAction from '../../../store/actions'

type Props = {
  placeholder: string
  section: string
  property: string
}

const TextInputField = (props: Props) => {
  const value = useStore((state) => {
    // @ts-ignore
    state[props.section][props.property]
  })
  const handleSectionInputField = useStoreAction.handleSectionInputField

  return (
    <input
      className='text-ipf'
      placeholder={props.placeholder}
      // @ts-ignore
      value={value}
      type={'text'}
      onChange={(e) =>
        handleSectionInputField(props.section, props.property, e.target.value)
      }
    />
  )
}

export default TextInputField
