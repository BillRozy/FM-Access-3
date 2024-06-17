import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import StyledLabel from './StyledLabel'

export default function LabeledField({ label, inputFunctions, required = false, className = "", legend = ""}: { label: string, inputFunctions: ((twClasses: string, key: string) => ReactNode)[], required?: boolean, className?: string, legend?: string}) {
  const hasMiltipleInput = inputFunctions.length > 1
  const inputs = inputFunctions.map((input, index) => input("rounded-lg text-lg leading-[150%] px-300 py-150 border-grey-500 border-[1px] hover:border-green-600 focus:border-green-600 aria-[invalid]:border-red focus:ring-0 cursor-pointer", `${index}`))
  const styledLabel = <StyledLabel required={required}>{label}</StyledLabel>
  const containerClass = twMerge("flex flex-col gap-100 max-w-full", className)
  return (
    hasMiltipleInput ? (
      <fieldset className={containerClass} aria-label={legend}>
        <legend className='mb-100'>{styledLabel}</legend>
        <div className='flex flex-row gap-200 flex-wrap'>
          {inputs}
        </div>
      </fieldset>

    ) : (
      <label className={containerClass}>
        {styledLabel}
        {inputs}
      </label>
    )
  )
}
