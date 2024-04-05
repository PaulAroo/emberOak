"use client"

import * as Z from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"

import {
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
} from "@/components/ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Icons } from "@/components/Icons"
import { Input } from "@/components/ui/input"
import { SEND_RESET_LINK } from "@/lib/mutations"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
	const router = useRouter()
	const [mailSent, setMailSent] = useState(false)
	const formSchema = Z.object({
		email: Z.string().email({ message: "invalid email address" }),
	})

	const form = useForm<Z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	})

	const [sendResetLink, { loading }] = useMutation(SEND_RESET_LINK, {
		variables: {
			email: form.getValues().email,
		},
	})

	const onSubmit = async () => {
		if (!mailSent) {
			try {
				const response = await sendResetLink()
				if (response.data?.sendUserPasswordResetLink) {
					setMailSent(true)
				}
			} catch (error) {
				// display error or toast
			}
		}
	}

	return (
		<>
			<Card className="max-w-96 m-auto">
				<CardHeader>
					<CardTitle className="capitalize text-center">
						forgot password
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					{mailSent && <p>Check your mail for a reset link</p>}
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
					<Button
						type="submit"
						form="forgot-password"
						className="w-full"
						disabled={loading || mailSent}
					>
						{loading ? <Icons.spinner /> : "Send"}
					</Button>
				</CardFooter>
			</Card>
		</>
	)
}
