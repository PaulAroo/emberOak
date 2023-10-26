import "./globals.css"
import type { Metadata } from "next"

import Page from "@/components/page"
import Providers from "@/lib/Providers"
import StyledComponentsRegistry from "@/lib/registry"

export const metadata: Metadata = {
	title: "ecom",
	description: "ecommerce application",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<StyledComponentsRegistry>
						<Page>{children}</Page>
					</StyledComponentsRegistry>
				</Providers>
			</body>
		</html>
	)
}
