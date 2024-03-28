import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "../Icons"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

		const togglePasswordVisibility = () => {
			setIsPasswordVisible((prev) => !prev)
		}

		return (
			<div className="relative flex flex-row-reverse items-center">
				<Input
					type={isPasswordVisible ? "text" : "password"}
					ref={ref}
					{...props}
					className={className}
				/>
				<button
					className="absolute right-[1.3rem] md:right-[1.8rem] text-[1rem] text-brand-ash cursor-pointer"
					onClick={togglePasswordVisibility}
					type="button"
					aria-label={`${isPasswordVisible ? "hide" : "view"} password`}
				>
					{isPasswordVisible ? <Icons.eyeoff /> : <Icons.eyeon />}
				</button>
			</div>
		)
	}
)
PasswordInput.displayName = "PasswordInput"

export { Input, PasswordInput }
