import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
	return (
		<section className="py-6">
			<div className="container">{children}</div>
		</section>
	)
}
