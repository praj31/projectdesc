import React, { forwardRef } from 'react'

type Props = {
  title: string
  subtitle: string
}

const SectionTitle = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  return (
    <>
      <div ref={ref}></div>
      <h1 className='section-title'>{props.title}</h1>
      <p className='section-subtitle'>{props.subtitle}</p>
    </>
  )
})

export default SectionTitle
