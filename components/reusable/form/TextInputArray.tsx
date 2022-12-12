import { useStore } from '../../../store'
import useStoreAction from '../../../store/actions'

type Props = {
  placeholder: string
  section: string
  property: string
  button_label: string
  placeholder_label: string
}

const TextInputArray = (props: Props) => {
  const items: string[] = useStore(
    // @ts-ignore
    (state) => state[props.section][props.property]
  )
  const addArrayInputField = useStoreAction.addArrayInputField
  const editArrayInputField = useStoreAction.editArrayInputField
  const deleteArrayInputField = useStoreAction.deleteArrayInputField

  return (
    <>
      <input
        className='text-ipf'
        placeholder={props.placeholder}
        // @ts-ignore
        value={items[0]}
        type={'text'}
        onChange={(e) =>
          editArrayInputField(props.section, props.property, e.target.value, 0)
        }
      />
      {/* @ts-ignore */}
      {items.slice(1).length > 0 &&
        items.slice(1).map((value, idx) => (
          <div className='text-ipf-del-con' key={idx}>
            <input
              className='text-ipf-del'
              placeholder={`${props.placeholder_label} ${idx + 2}`}
              value={value}
              type={'text'}
              onChange={(e) =>
                editArrayInputField(
                  props.section,
                  props.property,
                  e.target.value,
                  idx + 1
                )
              }
            />
            <button
              className='arr-delb'
              onClick={() =>
                deleteArrayInputField(props.section, props.property, idx + 1)
              }
            >
              <svg
                className='ipf-del-icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </button>
          </div>
        ))}
      <button
        className='arr-addf'
        onClick={() => addArrayInputField(props.section, props.property)}
      >
        {props.button_label}
      </button>
    </>
  )
}

export default TextInputArray
