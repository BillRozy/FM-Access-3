import { ReactNode } from 'react'

export default function Heading({children}: { children: ReactNode }) {
  return (
    <h1 className='text-[2rem] leading-[100%] tracking-[-1px] font-bold text-start text-grey-900 -mb-100'>{children}</h1>
  )
}
