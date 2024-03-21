import "./globals.css"
import type { Metadata } from "next"
import { headers } from "next/headers"
import localFont from "next/font/local"

import { Header } from "@/components/Header"
import Providers from "@/components/Providers"

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
	const session = headers().get("cookie")
	return (
		<html lang="en" className={radnika_font.className}>
			<body className="min-h-dvh bg-[#faebd7]">
				<Providers session={session}>
					<Header />
					<main>{children}</main>
					<p>sess</p>
					<p>{session}</p>
				</Providers>
			</body>
		</html>
	)
}
