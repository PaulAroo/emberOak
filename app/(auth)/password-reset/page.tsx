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
import { redirect } from "next/navigation"

export default function PasswordResetPage({
	searchParams,
}: {
	searchParams: { token: string; email: string }
}) {
	if (!searchParams.email || !searchParams.token) {
		redirect("/forgot-password")
	}

	return (
		<Card className="max-w-96 m-auto">
			<p>password reset</p>
		</Card>
	)
}
