import { redirect } from "next/navigation"

import { PasswordResetForm } from "@/components/forms/PasswordReset"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PasswordResetPage({
	searchParams,
}: {
	searchParams: { token: string; email: string }
}) {
	if (!searchParams.email || !searchParams.token) {
		redirect("/forgot-password")
	}

	const { email, token } = searchParams

	return (
		<Card className="max-w-96 m-auto">
			<CardHeader>
				<CardTitle className="capitalize text-center">Reset Password</CardTitle>
			</CardHeader>
			<CardContent>
				<PasswordResetForm email={email} token={token} />
			</CardContent>
		</Card>
	)
}
