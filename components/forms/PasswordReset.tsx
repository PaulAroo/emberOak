"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { Icons } from "../Icons"
import { Button } from "../ui/button"
import { PasswordInput } from "../ui/input"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"

type FormField = {
	new_password: string
	confirm_password: string
}

export const PasswordResetForm = () => {
	const form = useForm<FormField>({
		defaultValues: {
			new_password: "",
			confirm_password: "",
		},
	})

	const validatePassword = {
		required: "Password is required",
		minLength: {
			value: 8,
			message: "Password must be at least 8 characters long",
		},
	}

	const validateConfirmPassword = {
		validate: (value: string) =>
			value === form.getValues("new_password") || "Passwords do not match",
	}

	async function onSubmit() {}
	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
					id="reset"
				>
					<FormField
						control={form.control}
						name="new_password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New Password</FormLabel>
								<FormControl>
									<PasswordInput {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
						rules={validatePassword}
					/>
					<FormField
						control={form.control}
						name="confirm_password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<PasswordInput {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
						rules={validateConfirmPassword}
					/>
					<Button
						type="submit"
						className="w-full"
						form="reset"
						disabled={false}
					>
						{!!"" ? <Icons.spinner /> : "Reset Password"}
					</Button>
				</form>
			</Form>
		</>
	)
}
