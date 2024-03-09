import "./globals.css"
import type { Metadata } from "next"

import Header from "@/components/Header"
import Providers from "@/components/Providers"
import ApolloWrapper from "@/components/ApolloProvider"

export const metadata: Metadata = {
	title: "Ecom",
	description: "E-commerce application",
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
						<>
							<Header />
							{children}
						</>
					</Providers>
				</ApolloWrapper>
			</body>
		</html>
	)
}
