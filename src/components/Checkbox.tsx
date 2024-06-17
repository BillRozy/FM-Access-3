import { twMerge } from 'tailwind-merge'
import { UseFormRegisterReturn } from "react-hook-form";
import StyledLabel from './StyledLabel';


export default function Checkbox({className = "", register, label, required = false}: {className?: string, register: UseFormRegisterReturn, label: string, required: boolean}) {
  return (
    <label
      className={twMerge(
        "flex flex-row gap-200 items-center flex-grow cursor-pointer ring-offset-4 has-[:focus-visible]:ring-1 ring-green-600",
        className
      )}
    >
      <input
        className={`size-[18px] bg-transparent text-transparent border-2 rounded-sm border-grey-500 cursor-pointer focus:border-green-600 focus:ring-transparent checked:border-transparent`}
        type="checkbox"
        {...register}
      />
      <StyledLabel required={required}>{label}</StyledLabel>
    </label>
  )
}
