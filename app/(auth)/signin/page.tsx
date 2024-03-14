"use client"

import Container from "@/components/MainContainer"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function SigninPage() {
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

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
		form.reset()
	}

	return (
		<Container>
			<Card className="max-w-96 m-auto">
				<CardHeader>
					<CardTitle className="capitalize">Sign in</CardTitle>
					<CardDescription>Sign into your account</CardDescription>
				</CardHeader>
				<CardContent>
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
											<Input type="password" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<Button type="submit" className="w-full" form="signin">
						Sign in
					</Button>
				</CardFooter>
			</Card>
		</Container>
	)
}
