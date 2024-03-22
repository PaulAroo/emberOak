import "./globals.css"
import type { Metadata } from "next"
import { headers } from "next/headers"
import localFont from "next/font/local"

import { Header } from "@/components/Header"
import Providers from "@/components/Providers"
import ApolloWrapper from "@/components/Apollo/ApolloWrapper"

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
			<body className="min-h-dvh bg-[#faebd7]">
				<ApolloWrapper headers={(headers() as any).headers}>
					<Providers>
						<Header />
						<main>{children}</main>
					</Providers>
				</ApolloWrapper>
			</body>
		</html>
	)
}
