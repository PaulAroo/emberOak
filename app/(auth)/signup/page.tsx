import Link from "next/link"
import { SignupForm } from "@/components/forms/SignupForm"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card"

export default function SignupPage() {
	return (
		<Card className="max-w-96 m-auto">
			<CardHeader>
				<CardTitle className="capitalize text-center">Welcome</CardTitle>
				<CardDescription className="text-center">
					Create an account
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<SignupForm />
			</CardContent>
			<CardFooter className="text-sm flex-col gap-2">
				<p>
					Have an account?{" "}
					<Link href="/signin" className="capitalize">
						Sign in
					</Link>
				</p>
			</CardFooter>
		</Card>
	)
}
