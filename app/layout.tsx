import "./globals.css"
import type { Metadata } from "next"

import Page from "@/components/page"
import Providers from "@/components/Providers"
import ApolloWrapper from "@/components/ApolloProvider"
import StyledComponentsRegistry from "@/components/registry"

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
				{/* TODO: pass in the right headers */}
				<ApolloWrapper headers={{}} initialState={{}}>
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
