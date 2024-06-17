import { ReactNode } from 'react'
import BodyS from './BodyS'
import { twMerge } from 'tailwind-merge'

export default function BodyM({children, className = "", bold = false}: {children: ReactNode, className?: string, bold?: boolean}) {
  const classes = twMerge('text-lg', className)
  return (
    <BodyS className={classes} bold={bold}>{children}</BodyS>
  )
}
