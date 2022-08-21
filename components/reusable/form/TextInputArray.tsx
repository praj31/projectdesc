import React, { ChangeEvent, useCallback, useContext } from 'react'
import { StateContext } from '../../../context'

type Props = {
  placeholder: string
  section: string
  property: string
  button_label: string
  placeholder_label: string
}

const TextInputArray = (props: Props) => {
  const { state, dispatch } = useContext(StateContext)
  // @ts-ignore
  const items: string[] = state[props.section][props.property]

  const addField = useCallback(() => {
    dispatch({
      type: 'add-arr-ipf',
      payload: { section: props.section, property: props.property },
    })
  }, [dispatch, props.section, props.property])

  const deleteField = useCallback(
    (idx: number) => {
      dispatch({
        type: 'del-arr-ipf',
        payload: {
          section: props.section,
          property: props.property,
          index: idx,
        },
      })
    },
    [dispatch, props.section, props.property]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, idx: number) => {
      // @ts-ignore
      dispatch({
        type: 'edit-arr-ipf',
        payload: {
          section: props.section,
          property: props.property,
          value: e.target.value,
          index: idx,
        },
      })
    },
    [dispatch, props.section, props.property]
  )

  return (
    <>
      <input
        className='text-ipf'
        placeholder={props.placeholder}
        // @ts-ignore
        value={items[0]}
        type={'text'}
        onChange={(e) => handleChange(e, 0)}
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
              onChange={(e) => handleChange(e, idx + 1)}
            />
            <button className='arr-delb' onClick={() => deleteField(idx + 1)}>
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
      <button className='arr-addf' onClick={addField}>
        {props.button_label}
      </button>
    </>
  )
}

export default TextInputArray
