import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"

import { Header } from "@/components/Header"
import Providers from "@/components/Providers"
import ApolloWrapper from "@/components/ApolloProvider"

const radnika_font = localFont({
	src: "./radnikanext-medium-webfont.woff2",
	display: "swap",
	variable: "--font-radnik",
})

export const metadata: Metadata = {
	title: "Ember Oak",
	description: "Shop and sell furnitures online",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={radnika_font.className}>
			<body className="min-h-dvh">
				{/* TODO: pass in the right headers */}
				<ApolloWrapper headers={{}} initialState={{}}>
					<Providers>
						<Header />
						{children}
					</Providers>
				</ApolloWrapper>
			</body>
		</html>
	)
}
