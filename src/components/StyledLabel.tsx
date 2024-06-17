import { ReactNode } from 'react'
import Body from './typography/BodyS'

export default function StyledLabel({children, required = false}: {children: ReactNode, required?: boolean}) {
  return (
    <Body>{children}&nbsp;&nbsp;<span className='sr-only'>This field is required</span><span className='text-green-600 not-sr-only'>{ required ? "*" : ""}</span></Body>
  )
}
