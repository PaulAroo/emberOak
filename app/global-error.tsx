"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { message?: string }
	reset: () => void
}) {
	return (
		<div className="container py-6 space-y-4" role="alert">
			<div className="border-l-4 border-l-red-500 pl-4">
				<p className="capitalize text-red-500">{error.message}</p>
			</div>
			<Button onClick={reset}>try again</Button>
		</div>
	)
}
