import React, { ChangeEvent, useCallback, useContext } from 'react'
import { StateContext } from '../../../context'
import { ACTIONS } from '../../../reducer/actions'

type Props = {
  placeholder: string
  section: string
  property: string
}

const TextInputField = (props: Props) => {
  const { state, dispatch } = useContext(StateContext)
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'handle-section-ipf',
      payload: {
        section: props.section,
        property: props.property,
        value: e.target.value,
      },
    })
  }, [])
  return (
    <input
      className='text-ipf'
      placeholder={props.placeholder}
      // @ts-ignore
      value={state[props.section][props.property]}
      type={'text'}
      onChange={handleChange}
    />
  )
}

export default TextInputField
