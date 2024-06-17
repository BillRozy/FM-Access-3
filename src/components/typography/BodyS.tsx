import { ReactNode } from 'react'
import {twMerge} from 'tailwind-merge'

export default function Body({children, className = "", bold = false}: {children: ReactNode, className?: string, bold?: boolean}) {
  const classes = twMerge(`text-base leading-[150%] text-grey-900 ${bold ? "font-bold" : "font-normal"}`, className)
  return (
    <span className={classes}>{children}</span>
  )
}
