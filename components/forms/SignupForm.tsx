"use client"

import * as Z from "zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Icons } from "../Icons"
import { Button } from "../ui/button"
import { USER_SIGN_UP } from "@/lib/mutations"
import { Input, PasswordInput } from "../ui/input"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"

export const SignupForm = () => {
	const router = useRouter()
	const formSchema = Z.object({
		email: Z.string().email({ message: "invalid email address" }),
		password: Z.string().min(8, {
			message: "password must be at least 8 characters long",
		}),
	})

	const form = useForm<Z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const [signup, { loading, data, error }] = useMutation(USER_SIGN_UP, {
		variables: {
			data: { ...form.getValues(), name: "test user" },
		},
	})

	async function onSubmit() {
		await signup().catch(console.error)
		form.reset()
		router.push("/signin")
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6"
				id="signin"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" {...field} placeholder="mail@example.com" />
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
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full"
					form="signin"
					disabled={loading}
				>
					{loading ? <Icons.spinner /> : "Sign up"}
				</Button>
			</form>
		</Form>
	)
}
