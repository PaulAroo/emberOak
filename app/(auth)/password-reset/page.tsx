"use client"

import * as Z from "zod"
import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
	CardDescription,
} from "@/components/ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SEND_RESET_LINK } from "@/lib/mutations"

export default function PasswordResetPage() {
	const formSchema = Z.object({
		email: Z.string().email({ message: "invalid email address" }),
	})

	const form = useForm<Z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	})

	const [sendResetLink] = useMutation(SEND_RESET_LINK, {
		variables: {
			email: form.getValues().email,
		},
	})

	const onSubmit = async () => {
		await sendResetLink()
	}

	return (
		<Card className="max-w-96 m-auto">
			<CardHeader>
				<CardTitle className="capitalize text-center">
					forgot password
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} id="forgot-password">
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
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<Button type="submit" form="forgot-password" className="w-full">
					Send
				</Button>
			</CardFooter>
		</Card>
	)
}
