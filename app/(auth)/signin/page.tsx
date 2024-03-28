"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"

import {
	Form,
	FormItem,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form"
import {
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
	CardDescription,
} from "@/components/ui/card"
import { Icons } from "@/components/Icons"
import { useRouter } from "next/navigation"
import { GET_USER_QUERY } from "@/lib/queries"
import { USER_SIGN_IN } from "@/lib/mutations"
import { Button } from "@/components/ui/button"
import Container from "@/components/MainContainer"
import { Input, PasswordInput } from "@/components/ui/input"

export default function SigninPage() {
	const router = useRouter()
	const formSchema = z.object({
		email: z.string().email({ message: "invalid email address" }),
		password: z
			.string()
			.min(8, { message: "password must be at least 8 characters" }),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const [signin, { loading, data }] = useMutation(USER_SIGN_IN, {
		variables: form.getValues(),
		refetchQueries: [GET_USER_QUERY],
	})

	let errmsg = ""
	if (
		data?.authenticateUserWithPassword?.__typename ===
		"UserAuthenticationWithPasswordFailure"
	) {
		errmsg = data.authenticateUserWithPassword.message
	}

	async function onSubmit() {
		const res = await signin()
		form.setFocus("email")
		form.reset()
		if (
			res.data?.authenticateUserWithPassword?.__typename ===
			"UserAuthenticationWithPasswordSuccess"
		) {
			router.push("/products")
		}
	}

	return (
		<Container>
			<Card className="max-w-96 m-auto">
				<CardHeader>
					<CardTitle className="capitalize">Sign in</CardTitle>
					<CardDescription>Sign into your account</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					{!!errmsg && (
						<p className="text-red-500 border-l-4 border-l-red-500 pl-4">
							{errmsg}
						</p>
					)}
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
							id="signin"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" {...field} />
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
											<PasswordInput {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<Button
						type="submit"
						className="w-full"
						form="signin"
						disabled={loading}
					>
						{loading ? <Icons.spinner /> : "Sign in"}
					</Button>
				</CardFooter>
			</Card>
		</Container>
	)
}
