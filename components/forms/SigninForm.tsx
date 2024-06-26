"use client"

import * as Z from "zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Icons } from "../Icons"
import { Button } from "../ui/button"
import { USER_SIGN_IN } from "@/lib/mutations"
import { GET_USER_QUERY } from "@/lib/queries"
import { Input, PasswordInput } from "../ui/input"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"

export const SigninForm = () => {
	const router = useRouter()
	const [errorMsg, setErrorMsg] = useState("")
	const formSchema = Z.object({
		email: Z.string().email({ message: "invalid email address" }),
		password: Z.string().min(8, {
			message: "password must be at least 8 characters",
		}),
	})

	const form = useForm<Z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const [signin, { loading }] = useMutation(USER_SIGN_IN, {
		variables: form.getValues(),
		refetchQueries: [GET_USER_QUERY],
	})

	async function onSubmit() {
		const { data } = await signin()
		form.resetField("password")
		form.setFocus("password")

		if (
			data?.authenticateUserWithPassword?.__typename ===
			"UserAuthenticationWithPasswordSuccess"
		) {
			router.replace("/products")
		}
		if (
			data?.authenticateUserWithPassword?.__typename ===
			"UserAuthenticationWithPasswordFailure"
		) {
			setErrorMsg(data.authenticateUserWithPassword.message)
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
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										{...field}
										placeholder="example@mail.com"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<PasswordInput {...field} placeholder="********" />
								</FormControl>
								<FormMessage />
								<div className="text-sm text-right">
									<Link href="/forgot-password">Forgot password?</Link>
								</div>
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full" disabled={loading}>
						{loading ? <Icons.spinner /> : "Sign in"}
					</Button>
				</form>
			</Form>
		</>
	)
}
