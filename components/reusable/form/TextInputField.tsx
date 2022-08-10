import React, { useContext } from 'react'
import { StateContext } from '../../../context'
import { ACTIONS } from '../../../reducer/actions'

type Props = {
  placeholder: string
  section: string
  property: string
  action: ACTIONS
}

const TextInputField = (props: Props) => {
  const { state, dispatch } = useContext(StateContext)
  return (
    <input
      className='text-ipf'
      placeholder={props.placeholder}
      // @ts-ignore
      value={state[props.section][props.property]}
      type={'text'}
      onChange={(e) => {
        // @ts-ignore
        dispatch({
          type: props.action,
          payload: { property: props.property, value: e.target.value },
        })
      }}
    />
  )
}

export default TextInputField
