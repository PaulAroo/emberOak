import Link from "next/link"
import {
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
	CardDescription,
} from "@/components/ui/card"
import { Container } from "@/components/MainContainer"
import { SigninForm } from "@/components/forms/SigninForm"

export default function SigninPage() {
	return (
		<Container>
			<Card className="max-w-96 m-auto">
				<CardHeader>
					<CardTitle className="capitalize">Sign in</CardTitle>
					<CardDescription>Sign into your account</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<SigninForm />
				</CardContent>
				<CardFooter className="text-sm flex-col gap-2">
					<p>
						Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
					</p>
					<Link href="/password-reset">Forgot password?</Link>
				</CardFooter>
			</Card>
		</Container>
	)
}
