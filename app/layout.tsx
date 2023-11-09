import "./globals.css"
import type { Metadata } from "next"

import Page from "@/components/page"
import Providers from "@/utils/Providers"
import ApolloWrapper from "@/utils/ApolloProvider"
import StyledComponentsRegistry from "@/utils/registry"

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
