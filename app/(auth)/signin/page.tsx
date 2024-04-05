import Link from "next/link"
import {
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
	CardDescription,
} from "@/components/ui/card"
import { SigninForm } from "@/components/forms/SigninForm"

export default function SigninPage() {
	return (
		<Card className="max-w-96 m-auto">
			<CardHeader>
				<CardTitle className="capitalize text-center">Welcome back</CardTitle>
				<CardDescription className="text-center">
					Sign into your account
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<SigninForm />
			</CardContent>
			<CardFooter className="text-sm flex-col gap-2">
				<p>
					Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
				</p>
				<Link href="/forgot-password">Forgot password?</Link>
			</CardFooter>
		</Card>
	)
}
