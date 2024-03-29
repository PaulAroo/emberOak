import { ReactNode } from "react"
import { Container } from "@/components/MainContainer"

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<Container sectionStyles="py-0 grid min-h-[90dvh] place-items-center">
			{children}
		</Container>
	)
}
