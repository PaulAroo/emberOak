import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ContainerProps {
	sectionStyles?: string
	wrapperStyles?: string
	children: ReactNode
}

export const Container = ({
	children,
	sectionStyles,
	wrapperStyles,
}: ContainerProps) => {
	return (
		<section className={cn("py-6", sectionStyles)}>
			<div className={cn("container", wrapperStyles)}>{children}</div>
		</section>
	)
}
