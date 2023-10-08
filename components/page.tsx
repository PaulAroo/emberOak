import { ReactNode } from "react"

export default function Page({ children }: { children: ReactNode }) {
	return (
		<div>
			this is the page component
			{children}
		</div>
	)
}
