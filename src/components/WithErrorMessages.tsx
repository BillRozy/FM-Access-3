import { ReactNode } from 'react'
import Body from './typography/BodyS'
import { FieldError, FieldErrorsImpl, FieldValues, Merge } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
export default function WithErrorMessages<T extends FieldValues>({error = undefined, children, className = ""}: {error?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined, children: ReactNode, className?: string}) {
    const errorAlert = error != null ? <p role='alert'><Body className='text-red'>{error.message?.toString() ?? ""}</Body></p> : null
    return (
    <div className={twMerge("flex flex-col gap-100", className)}>
        {children}
        {
            errorAlert
        }
    </div>
  )
}
