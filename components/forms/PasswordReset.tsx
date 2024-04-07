"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { ApolloError, useMutation } from "@apollo/client"

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"
import { Icons } from "../Icons"
import { Button } from "../ui/button"
import { PasswordInput } from "../ui/input"
import { PASSWORD_RESET } from "@/lib/mutations"

type FormField = {
	new_password: string
	confirm_password: string
}

export const PasswordResetForm = ({
	email,
	token,
}: {
	email: string
	token: string
}) => {
	const router = useRouter()
	const [errorMsg, setErrorMsg] = useState("")
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

	const [reset, { loading }] = useMutation(PASSWORD_RESET, {
		variables: {
			email,
			token,
			password: form.getValues()["confirm_password"],
		},
	})

	const onSubmit = async () => {
		try {
			const { data } = await reset()
			if (data?.redeemUserPasswordResetToken === null) {
				router.replace("/signin")
			} else {
				switch (data?.redeemUserPasswordResetToken.code) {
					case "TOKEN_EXPIRED":
						setErrorMsg("token expired, request a new link")
						setTimeout(() => {
							router.replace("/forgot-password")
						}, 4000)
						break
					case "TOKEN_REDEEMED":
						setErrorMsg("password has already been changed, proceed to sign in")
						setTimeout(() => {
							router.replace("/signin")
						}, 4000)
						break

					default:
						setErrorMsg("password reset failed")
						setTimeout(() => {
							router.replace("/forgot-password")
						}, 5000)
						break
				}
			}
		} catch (error) {
			setErrorMsg("Something went wrong, check your internet connection")
		}
	}

	return (
		<>
			{!!errorMsg && (
				<p className="text-red-500 border-l-4 border-l-red-500 pl-4">
					{errorMsg}
				</p>
			)}
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
						disabled={loading}
					>
						{loading ? <Icons.spinner /> : "Reset Password"}
					</Button>
				</form>
			</Form>
		</>
	)
}
