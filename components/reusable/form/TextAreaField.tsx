import { useStore } from '../../../store'
import useStoreAction from '../../../store/actions'

type Props = {
  placeholder: string
  section: string
  property: string
}

const TextAreaField = (props: Props) => {
  const value = useStore((state) => {
    // @ts-ignore
    state[props.section][props.property]
  })
  const handleSectionInputField = useStoreAction.handleSectionInputField

  return (
    <textarea
      rows={5}
      className='text-arf'
      placeholder={props.placeholder}
      // @ts-ignore
      value={value}
      onChange={(e) =>
        handleSectionInputField(props.section, props.property, e.target.value)
      }
    />
  )
}

export default TextAreaField
