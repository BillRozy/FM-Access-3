import { ReactNode } from 'react'

export default function Toast({headerSlot, contentSlot}: {headerSlot: () => ReactNode, contentSlot: () => ReactNode}) {
  return (
    <div className='p-300 bg-grey-900 rounded-xl flex flex-col gap-100 max-w-[450px]'>
        {headerSlot()}
        {contentSlot()}
    </div>
  )
}
