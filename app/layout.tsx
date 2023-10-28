import "./globals.css"
import type { Metadata } from "next"

import Page from "@/components/page"
import Providers from "@/lib/Providers"
import ApolloWrapper from "@/lib/ApolloProvider"
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
				<ApolloWrapper>
					<Providers>
						<StyledComponentsRegistry>
							<Page>{children}</Page>
						</StyledComponentsRegistry>
					</Providers>
				</ApolloWrapper>
			</body>
		</html>
	)
}
