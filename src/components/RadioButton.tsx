import BodyM from "./typography/BodyM";
import { twMerge } from "tailwind-merge";
import { UseFormRegisterReturn } from "react-hook-form";

export default function RadioButton({
  className,
  register,
  value,
}: {
  className: string;
  value: string;
  register: UseFormRegisterReturn;
}) {
  return (
    <label
      className={twMerge(
        "flex flex-row gap-150 items-center flex-grow has-[:checked]:bg-green-200 has-[:checked]:border-green-600 cursor-pointer hover:border-green-600 has-[:checked]:hover:border-grey-500 has-[:focus-visible]:ring-2 ring-green-600 ring-offset-2",
        className
      )}
    >
      <input
        className={`size-[19.5px] bg-transparent text-transparent opacity-50 border-2 border-grey-500 cursor-pointer focus:border-green-600 focus:ring-transparent focus:ring-offset-0 checked:border-transparent checked:opacity-100`}
        value={value}
        type="radio"
        {...register}
      />
      <BodyM>{value}</BodyM>
    </label>
  );
}
