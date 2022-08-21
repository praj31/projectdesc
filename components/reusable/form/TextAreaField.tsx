import React, { ChangeEvent, useCallback, useContext } from 'react'
import { StateContext } from '../../../context'
import { ACTIONS } from '../../../reducer/actions'

type Props = {
  placeholder: string
  section: string
  property: string
  action: ACTIONS
}

const TextAreaField = (props: Props) => {
  const { state, dispatch } = useContext(StateContext)

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      // @ts-ignore
      type: props.action,
      payload: {
        section: props.section,
        property: props.property,
        value: e.target.value,
      },
    })
  }, [])

  return (
    <textarea
      rows={5}
      className='text-arf'
      placeholder={props.placeholder}
      // @ts-ignore
      value={state[props.section][props.property]}
      onChange={handleChange}
    />
  )
}

export default TextAreaField
